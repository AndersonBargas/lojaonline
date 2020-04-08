import express from 'express';
import configs from './configs';
import loaders from './loaders'

const app = express();
loaders({ app: app });


app.listen(configs.port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Loja Online is ready on port #${configs.port}`);
});