const redis = require('redis');
require('dotenv').config();


const redisClient = redis.createClient({
  url: process.env.REDIS_KEY, 
  legacyMode: true,
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

redisClient.connect()
  .then(() => {
    console.log('Connected to Redis');
  })
  .catch((err) => {
    console.error('Redis connection error:', err);
  });

module.exports = redisClient;
