const fetch = require('node-fetch');
const LRU = require('lru-cache');


// in-memory cache for a day
const imagesCache = new LRU({
  length(n, key) { return n.length; },
  max: 1024 * 1024 * 10, // 10mb
  maxAge: 1000 * 60 * 60 * 24 // 24hours
});

// youtube search query
const IMAGES_SEARCH_CONFIG_JSON = JSON.parse(process.env.IMAGES_SEARCH_CONFIG_JSON);
function imagesSearch(req, res) {
  const query = req.query.q;
  const key = IMAGES_SEARCH_CONFIG_JSON.api_key;
  const cx = IMAGES_SEARCH_CONFIG_JSON.cx;
  const url = `https://www.googleapis.com/customsearch/v1?safe=high&searchType=image&cx=${encodeURIComponent(cx)}&key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}`;

  // caching
  const cachedJson = imagesCache.get(url);
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for imagesSearch...');
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.json(json);
      imagesCache.set(url, json);
    })
    .catch(error => res.status(500).json({error}))
}


module.exports = {imagesSearch};