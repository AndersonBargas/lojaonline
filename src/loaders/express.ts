import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from '../api';
import configs from '../configs';

export default ({ app }: { app: express.Application }) => {

    // middlewares
    app.use(bodyParser.json());

    // api routes
    app.use(configs.apiPrefix, apiRoutes());

};