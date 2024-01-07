import { Knex } from 'knex';
require('dotenv').config();

// Common settings for development and production
const commonConfig: Knex.Config = {
  client: 'pg',
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};

// Development specific configuration
const development: Knex.Config = {
  ...commonConfig,
  connection: {
    host: process.env.DEV_DB_HOST,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PWD,
    database: process.env.DEV_DB_NAME,
  },
};

// Production specific configuration
const production: Knex.Config = {
  ...commonConfig,
  connection: {
    host: process.env.PROD_DB_HOST,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PWD,
    database: process.env.PROD_DB_NAME,
    ssl: { rejectUnauthorized: false }, // Adjust SSL settings as per your DB's requirement
  },
  pool: { min: 2, max: 10 }, // Connection pool settings
};

// Directly export the configuration object
export default {
  development,
  production,
};
