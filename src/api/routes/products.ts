import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/products', route);

  route.get('/:id', (req: Request, res: Response) => {
    return res.json(req.params).status(200);
  });
};