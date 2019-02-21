const fetch = require('node-fetch');


// cache in 60 second windows, no expiration until server bounces
const imagesCache = {};
function imagesCacheKey(url) {
  const timeBucket = Math.floor(new Date().getTime() / (60 * 1000));
  return [url, timeBucket].join(':');
}

// youtube search query
const IMAGES_SEARCH_CONFIG_JSON = JSON.parse(process.env.IMAGES_SEARCH_CONFIG_JSON);
function imagesSearch(req, res) {
  const query = req.query.q;
  const key = IMAGES_SEARCH_CONFIG_JSON.api_key;
  const cx = IMAGES_SEARCH_CONFIG_JSON.cx;
  const url = `https://www.googleapis.com/customsearch/v1?safe=high&searchType=image&cx=${encodeURIComponent(cx)}&key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}`;

  // caching
  const cacheKey = imagesCacheKey(url);
  const cachedJson = imagesCache[cacheKey];
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for imagesSearch...');
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.json(json);
      imagesCache[cacheKey] = json;
    })
    .catch(error => res.status(500).json({error}))
}


module.exports = {imagesSearch};