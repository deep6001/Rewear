const redisClient = require('./redisClient');

const setData = async (key, data, ttlInSeconds = 3600) => {
  if (!key || !data) throw new Error('Key and data are required');
  await redisClient.set(key, JSON.stringify(data), {
    EX: ttlInSeconds,
  });
};

const getData = async (key) => {
  const result = await redisClient.get(key);
  return result ? JSON.parse(result) : null;
};

const deleteData = async (key) => {
  await redisClient.del(key);
};

module.exports = {
  setData,
  getData,
  deleteData,
};
