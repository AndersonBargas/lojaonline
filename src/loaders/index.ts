import express from 'express';
import { Server } from 'http';

import configs from '../configs';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import { Mongoose } from 'mongoose';

export default async ({ app }: { app: express.Application }) : Promise<Server> => {

    expressLoader({ app: app });

    let mongoConnection:Mongoose;
    try {
        mongoConnection = await mongooseLoader();
    } catch (err) {
        throw err;
    }

    return new Promise<Server>((res, rej) => {
        const server = app.listen(configs.port, err => {
            if (err) {
              rej(err);
            }
            res(server);

            // gracefull disconnect
            server.on('close', function() {
                mongoConnection.disconnect();
            });
        });
    });

};