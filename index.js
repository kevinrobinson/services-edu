const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
const {youtubeSearch} = require('./services/youtubeSearch');
const {imagesSearch} = require('./services/imagesSearch');


/* --- server setup ---------------------------------- */

// create server
const app = express();


// only allow https
function enforceHTTPS(request, response, next) {
  if (process.env.NODE_ENV === 'development') return next();

  if (request.headers['x-forwarded-proto'] !== 'https') {
    const httpsUrl = ['https://', request.headers.host, request.url].join('');
    return response.redirect(httpsUrl);
  }

  return next();
}
app.use(enforceHTTPS);


// create IP-based rate limiter for all endpoints
app.use(rateLimit({
  windowMs: 10*60*1000, // 10 minutes
  max: 100, // limit each IP to n requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
  onLimitReached: (req, res, options) => {
    console.log('rateLimit reached!');
  }
}));


// Allow CORS
const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN;
app.use(cors({origin: CORS_ALLOW_ORIGIN}));


// Check API key for allowing access 
const SERVICES_EDU_CONFIG_JSON = JSON.parse(process.env.SERVICES_EDU_CONFIG_JSON);
function checkApiKey(req, res, next) {
  const apiKey = req.get('x-services-edu-api-key');
  if (SERVICES_EDU_CONFIG_JSON.api_keys.indexOf(apiKey) !== -1) {
    console.log(`checkApiKey allowed ${apiKey}`);
    return next();
  }

  res.status(405).json({status: 'Invalid x-services-edu-api-key header.'});
}


/* --- services ---------------------------------- */
app.get('/youtube/search', checkApiKey, youtubeSearch);
app.get('/images/search', checkApiKey, imagesSearch)
/* ----------------------------------------------- */


// start server
const PORT = process.env.PORT || 5000;
app.get('/hello', (req, res) => res.json({hello: 'world'}));
app.get('*', (req, res) => res.status(404).json({status: '404'}));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
