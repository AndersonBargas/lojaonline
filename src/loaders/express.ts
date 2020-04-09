import express from 'express';
import bodyParser from 'body-parser';

import apiRoutes from '../api';
import configs from '../configs';
import BadRequestError from '../errors/badRequestError';

export default ({ app }: { app: express.Application }) => {

    // middlewares
    app.use(bodyParser.json());

    // api routes
    app.use(configs.apiPrefix, apiRoutes());

    // error handler
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (err.name === 'ValidationError') {
            const newErr = new BadRequestError("Validation Error");
            for (let field in err.errors) {
                newErr.addFieldError({
                    fieldName: err.errors[field].properties.path,
                    errorDetail: `${err.errors[field].name}: ${err.errors[field].message}`,
                });
            }

            return res.status(400).send(newErr).end();
        } else {
            return res.status(500).send().end();
        }
    });

};