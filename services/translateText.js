const fetch = require('node-fetch');


// google translate
const TRANSLATE_TEXT_CONFIG_JSON = JSON.parse(process.env.TRANSLATE_TEXT_CONFIG_JSON);
async function translateText(req, res) {
  const {cache} = res.app.locals;
  const text = req.query.text;
  const language = req.query.language;
  const key = TRANSLATE_TEXT_CONFIG_JSON.api_key;
  const url = `https://translation.googleapis.com/language/translate/v2?q=${encodeURIComponent(text)}&key=${encodeURIComponent(key)}&target=${encodeURIComponent(language)}`;

  // caching
  const cachedJson = await cache.get(url);
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for translateText...');
  fetch(url, { method: 'POST' })
    .then(response => response.json())
    .then(json => {
      res.json(json);
      cache.set(url, json);
    })
    .catch(error => res.status(500).json({error}))
}

module.exports = {translateText};
