export default {
    apiPrefix: '/api',
    databaseURL: process.env.MONGODB_URL || 'mongodb://localhost:27017/lojaonline',
    port:  parseInt(process.env.PORT || '8000', 10),
}