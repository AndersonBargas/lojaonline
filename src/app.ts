import express from 'express';
import loaders from './loaders'

const app = express();

async function appInit() {

    try {
        const server = await loaders({ app: app });
        return console.log('Loja Online is ready at:', server.address());
    } catch (err) {
        return console.error(err);
    }

}

appInit();