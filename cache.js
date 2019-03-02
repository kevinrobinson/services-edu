const {Pool} = require('pg');


// For querying the database
function createPool() {
  const connectionString = (process.env.NODE_ENV === 'development')
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL +'?ssl=true';

  return new Pool({connectionString});
}

function set(pool, cacheKey, json) {
  const sql = `INSERT INTO cached(cache_key, json, timestampz) VALUES ($1, $2, $3)`;
  const now = new Date();
  const values = [cacheKey, json, now];
  return pool.query(sql, values)
    .then(response => {
      return {success: true};
    })
    .catch(error => {
      console.log('cache:set error', cacheKey, error);
      return null;
    });
}

// Get latest
function get(pool, cacheKey) {
  const sql = 'SELECT * FROM cached WHERE cache_key = $1 ORDER BY timestampz DESC LIMIT 1';
  const values = [cacheKey];
  return pool.query(sql, values)
    .then(response => {
      const {rows} = response;
      return (rows.length === 0) ? null : rows[0].json;
    })
    .catch(error => {
      console.log('cache:get error', cacheKey, error);
      return null;
    });
}


function createCache() {
  const pool = createPool();
  return {
    get: get.bind(null, pool),
    set: set.bind(null, pool)
  };
}


module.exports = {createCache};