export default {
    apiPrefix: '/api',
    databaseURL: process.env.MONGODB_URL || 'mongodb://localhost:27017/lojaonline',
    jwtSecret: process.env.JWT_SECRET || 'secret',
    maxResultsPerPage: 20,
    port:  parseInt(process.env.PORT || '8000', 10),
}