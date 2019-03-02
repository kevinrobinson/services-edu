const fetch = require('node-fetch');
const LRU = require('lru-cache');


// in-memory cache for a day
const translationCache = new LRU({
  length(n, key) { return n.length; },
  max: 1024 * 1024 * 10, // 10mb
  maxAge: 1000 * 60 * 60 * 24 // 24hours
});

// google translate
const TRANSLATE_TEXT_CONFIG_JSON = JSON.parse(process.env.TRANSLATE_TEXT_CONFIG_JSON);
function translateText(req, res) {
  const text = req.query.text;
  const language = req.query.language;
  const key = TRANSLATE_TEXT_CONFIG_JSON.api_key;
  const url = `https://translation.googleapis.com/language/translate/v2?q=${encodeURIComponent(text)}&key=${encodeURIComponent(key)}&target=${encodeURIComponent(language)}`;

  // caching
  const cachedJson = translationCache.get(url);
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for translateText...');
  fetch(url, { method: 'POST' })
    .then(response => response.json())
    .then(json => {
      res.json(json);
      translationCache.set(url, json);
    })
    .catch(error => res.status(500).json({error}))
}

module.exports = {translateText};
