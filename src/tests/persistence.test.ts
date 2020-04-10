import { Mongoose } from 'mongoose';

import mongooseLoader from '../loaders/mongoose';
import productsController from '../controllers/products';
import { IProduct } from '../interfaces/IProduct';
import NotFoundError from '../errors/notFoundError';

let mongoConnection:Mongoose;

beforeAll(async (done) => {
    mongoConnection = await mongooseLoader();
    done();
});

afterAll(async (done) => {
    await mongoConnection.disconnect();
    done();
});

describe('Create product', () => {
    it('should persist a new product on database', async () => {

        const productDTO = {
            "name": "panela de ferro fundido",
            "description": "alta qualidade",
            "price": 180.50,
        };

        const product = <IProduct>await productsController.createProduct(productDTO);
        expect(product).toBeTruthy();
        expect(product).toHaveProperty('_id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('description');
        expect(product).toHaveProperty('price');

    });
});

describe('Delete product', () => {
    it('should  return "Not found" when trying to delete a product by using an invalid ID', async () => {
        
        const t = productsController.deleteProductByID('1nv4l1D');
        expect(t).rejects.toBeInstanceOf(NotFoundError);
 
    });
});

describe('Read product', () => {
    it('should return "Not found" when trying to read a product by using an invalid ID', async () => {
        
        const t = productsController.readProductByID('1nv4l1D');
        expect(t).rejects.toBeInstanceOf(NotFoundError);
 
    });
});