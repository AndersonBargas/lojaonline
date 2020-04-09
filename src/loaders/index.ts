import express from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async ({ app }: { app: express.Application }) => {

    expressLoader({ app: app });

    try {
        const mongoConnection = await mongooseLoader();
    } catch (err) {
        throw err;
    }
    

};