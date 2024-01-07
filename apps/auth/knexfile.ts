import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'empl_hub',
    password: 'zaq1@WSX',
    database: 'EmployeeHubDb'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  },
};

export default config;