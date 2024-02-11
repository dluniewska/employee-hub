export default () => ({
    rabbit: {
        rabbitUrl: process.env.RABBIT_URL,
        rabbitAuthQueue: process.env.RABBIT_AUTH_QUEUE
    }
});