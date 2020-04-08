import express from 'express';
import bodyParser from 'body-parser';

export default ({ app }: { app: express.Application }) => {

    // middlewares
    app.use(bodyParser.json());

};