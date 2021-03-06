const { Pool } = require('pg');
const ENV = process.env.NODE_ENV || 'development';

const config = 
  ENV === 'production'
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {};

require('dotenv').config({
  path: `${__dirname}/../.env.${ENV}`,
});

console.log(process.env.PGDATABASE) /////need to work out why undefined!!!!!

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error('PGDATABASE or DATABASE_URL not set');
}

module.exports = new Pool(config);