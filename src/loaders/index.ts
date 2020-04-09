import express from 'express';
import expressLoader from './express';

export default async ({ app }: { app: express.Application }) => {

    expressLoader({ app: app });

};