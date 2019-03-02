const fetch = require('node-fetch');


// youtube search query
// see https://developers.google.com/youtube/v3/docs/search/list
const YOUTUBE_CONFIG_JSON = JSON.parse(process.env.YOUTUBE_CONFIG_JSON);
function youtubeSearch(req, res) {
  const {cache} = res.app.locals;
  const query = req.query.q;
  const key = YOUTUBE_CONFIG_JSON.api_key;
  const url = `https://www.googleapis.com/youtube/v3/search?safeSearch=strict&part=snippet&q=${encodeURIComponent(query)}&key=${encodeURIComponent(key)}`;

  // caching
  const cachedJson = cache.get(url);
  if (cachedJson) return res.json(cachedJson);

  // fetch
  console.log('fetching for youtubeSearch...');
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.json(json);
      cache.set(url, json);
    })
    .catch(error => res.status(500).json({error}))
}


module.exports = {youtubeSearch};