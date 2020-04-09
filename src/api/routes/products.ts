import { Router, Request, Response, NextFunction } from 'express';

import productsController from '../../controllers/products';

const route = Router();

export default (app: Router) => {
    app.use('/products', route);

    // create
    route.post('/', (req: Request, res: Response, next: NextFunction) => {

        const productDTO = {
            "name": req.body['name'],
            "description": req.body['description'],
            "price": parseInt(req.body['price']),
        };

        productsController.createProduct(productDTO)
        .then(product => {
            res.status(201).json(product);
        })
        .catch(err => {
            next(err);
        });

    });

    // delete
    route.delete('/:id', (req: Request, res: Response, next: NextFunction) => {

        productsController.deleteProductByID(req.params['id'])
        .then(deletedProduct => {
            res.status(204).send();
        })
        .catch(err => {
            next(err);
        });

    });

    // list and search
    route.get('/', (req: Request, res: Response, next: NextFunction) => {
        const query = req.query.query?.toString() || '';
        const pageNumber = parseInt(req.query.pageNumber?.toString()) || 1;
        const resultsPerPage = parseInt(req.query.resultsPerPage?.toString()) || 10;

        productsController.searchProducts(query, pageNumber, resultsPerPage)
        .then(products => {
            if (products['data'].length === 0) {
                res.status(404).send();
            } else {
                res.status(200).json(products);
            }
        })
        .catch(err => {
            next(err);
        });
    });

    // read
    route.get('/:id', (req: Request, res: Response, next: NextFunction) => {
        
        productsController.readProductByID(req.params['id'])
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            next(err);
        });
        
    });

    // update
    route.put('/:id', (req: Request, res: Response, next: NextFunction) => {

        const productDTO = {
            "name": req.body['name'],
            "description": req.body['description'],
            "price": parseInt(req.body['price']),
        };

        productsController.updateProductByID(req.params['id'], productDTO)
        .then(updatedProduct => {
            res.status(204).send();
        })
        .catch(err => {
            next(err);
        });

    });

};