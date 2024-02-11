export default () => ({
    nodeEnv: process.env.NODE_ENV,
    synchronize: process.env.SYNCHRONIZE, 
    port: parseInt(process.env.PORT) || 3000
});