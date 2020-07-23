const neo4j = require('neo4j-driver');
const config = require('./config');

// Create Driver
const driver = neo4j.driver(
    config.DATABASE_URL,
    neo4j.auth.basic(
        config.DATABASE_USER,
        config.DATABASE_PSWRD,
    )
)

// Express middleware
module.exports = function(req, res, next) {
  req.driver = driver;

  next();
};
