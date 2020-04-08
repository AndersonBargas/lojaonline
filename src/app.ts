import express from 'express';

const app = express();
const port = process.env.PORT || '8000';

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Loja Online is ready on port #${port}`);
});