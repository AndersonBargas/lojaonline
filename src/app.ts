import express from 'express';
import configs from './configs';
import loaders from './loaders'

const app = express();

async function appInit() {

    try {
        await loaders({ app: app });
    } catch (err) {
        return console.error(err);
    }
  

  app.listen(configs.port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`Loja Online is ready on port #${configs.port}`);
  });

}

appInit();