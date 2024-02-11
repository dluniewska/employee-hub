export default () => ({
    connectionString: process.env.DATABASE_URL,
    testsConnectionString: process.env.TESTS_DATABASE_URL,
});