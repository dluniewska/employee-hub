export default () => ({
    connectionString: process.env.DATABASE_URL,
    testsConnectionString: process.env.TESTS_DATABASE_URL,
    postgresHost: process.env.PG_HOST,
    postgresPort: parseInt(process.env.PG_PORT) || 5432,
    postgresUser: process.env.PG_USER,
    postgresDb: process.env.PG_DB,
    postgresPwd: process.env.PG_PWD,
});