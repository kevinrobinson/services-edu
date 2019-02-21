const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');
const {youtubeSearch} = require('./youtubeSearch');


// create app with IP-based rate limiter for all endpoints
const app = express();
app.use(rateLimit({
  windowMs: 10*60*1000, // 10 minutes
  max: 100, // limit each IP to n requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
  onLimitReached: (req, res, options) => {
    console.log('rateLimit reached!');
  }
}));


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

// Allow CORS
const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN;
app.use(cors({origin: CORS_ALLOW_ORIGIN}));


// youtube search
app.get('/youtube/search', checkApiKey, youtubeSearch);


// start server
const PORT = process.env.PORT || 5000;
app.get('/hello', (req, res) => res.json({hello: 'world'}));
app.get('*', (req, res) => res.status(404).json({status: '404'}));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
