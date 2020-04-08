import express from 'express';
import expressLoader from './express';

export default ({ app }: { app: express.Application }) => {
    expressLoader({ app: app });
};