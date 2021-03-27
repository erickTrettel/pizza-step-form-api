require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  port: process.env.PORT || 3333,
  env: process.env.NODE_ENV || 'development',
};
