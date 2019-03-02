const fetch = require('node-fetch');

// youtube search query
const IMAGES_SEARCH_CONFIG_JSON = JSON.parse(process.env.IMAGES_SEARCH_CONFIG_JSON);
function imagesSearch(req, res) {
  const {cache} = res.app.locals;
  const query = req.query.q;
  const key = IMAGES_SEARCH_CONFIG_JSON.api_key;
  const cx = IMAGES_SEARCH_CONFIG_JSON.cx;
  const url = `https://www.googleapis.com/customsearch/v1?safe=high&searchType=image&cx=${encodeURIComponent(cx)}&key=${encodeURIComponent(key)}&q=${encodeURIComponent(query)}`;

  // caching
  const cachedJson = cache.get(url);
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for imagesSearch...');
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.json(json);
      cache.set(url, json);
    })
    .catch(error => res.status(500).json({error}))
}


module.exports = {imagesSearch};