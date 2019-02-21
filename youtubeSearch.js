const fetch = require('node-fetch');


// cache in 60 second windows, no expiration until server bounces
const youtubeCache = {};
function youtubeCacheKey(url) {
  const timeBucket = Math.floor(new Date().getTime() / (60 * 1000));
  return [url, timeBucket].join(':');
}

// youtube search query
const YOUTUBE_CONFIG_JSON = JSON.parse(process.env.YOUTUBE_CONFIG_JSON);
function youtubeSearch(req, res) {
  const query = req.query.q;
  const key = YOUTUBE_CONFIG_JSON.api_key;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${key}`;

  // caching
  const cacheKey = youtubeCacheKey(url);
  const cachedJson = youtubeCache[cacheKey];
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching...');
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.json(json);
      youtubeCache[cacheKey] = json;
    })
    .catch(error => res.status(500).json({error}))
}


module.exports = {youtubeSearch};