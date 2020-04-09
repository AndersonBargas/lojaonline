import mongoose, { Error } from 'mongoose';

import { IProductInputDTO } from '../interfaces/IProduct';
import ProductSchema from '../models/product'
import NotFoundError from '../errors/notFoundError';

// create
async function createProduct (dto: IProductInputDTO) : Promise<IProductInputDTO> {

    const product = new ProductSchema({
        name: dto.name,
        description: dto.description,
        price: dto.price,
    });

    return new Promise<IProductInputDTO>((res, rej) => {
        product.save({validateBeforeSave: true}, (err, product) => {
            if (err) {
                rej(err);
            }
            res(product);
        });
    });

};

// delete
async function deleteProductByID (id: string) : Promise<IProductInputDTO> {

    return new Promise<IProductInputDTO>((res, rej) => {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const notFoundErr = new NotFoundError(`Product ID: "${id}" not found`);
            rej(notFoundErr);
        }

        ProductSchema.findById(id, (errFinding, product) => {
            if (errFinding) {
                rej(errFinding);
            }
            if (product) {
                product.remove((errDeleting, deletedProduct) => {
                    if (errDeleting) {
                        rej(errDeleting);
                    }
                    res(deletedProduct);
                });
            } else {
                const notFoundErr = new NotFoundError(`Product id: "${id}" not found`);
                rej(notFoundErr);
            }
        });
    });
}

// read
async function readProductByID (id: string) : Promise<IProductInputDTO> {

    return new Promise<IProductInputDTO>((res, rej) => {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const notFoundErr = new NotFoundError(`Product ID: "${id}" not found`);
            rej(notFoundErr);
        }

        ProductSchema.findById(id, (errFinding, product) => {
            if (errFinding) {
                rej(errFinding);
            }
            if (product) {
                res(product);
            } else {
                const notFoundErr = new NotFoundError(`Product ID: "${id}" not found`);
                rej(notFoundErr);
            }
        });
    });
}

// update
async function updateProductByID (id: string, dto: IProductInputDTO) : Promise<IProductInputDTO> {

    return new Promise<IProductInputDTO>((res, rej) => {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const notFoundErr = new NotFoundError(`Product ID: "${id}" not found`);
            rej(notFoundErr);
        }

        ProductSchema.findById(id, (errFinding, product) => {
            if (errFinding) {
                rej(errFinding);
            }
            if (product) {
                Object.assign(product, dto);
                product.save({validateBeforeSave: true}, (errUpdating, updatedProduct) => {
                    if (errUpdating) {
                        rej(errUpdating);
                    }
                    res(updatedProduct);
                });
            } else {
                const notFoundErr = new NotFoundError(`Product ID: "${id}" not found`);
                rej(notFoundErr);
            }
        });
    });
}

// search
async function searchProducts (productName: string, pageNumber: number, resultsPerPage: number) : Promise<any> {

    return new Promise<any>((res, rej) => {

        ProductSchema.aggregate([{
            "$facet": {
                "data": [
                    { "$match": productName.trim().length === 0 ? {} : { name: { "$regex": productName.trim(), "$options" : "i" } } },
                    { "$skip" : (pageNumber - 1) * resultsPerPage },
                    { "$limit": resultsPerPage },
                ],
                "total": [{
                    "$count": "count",
                }]
            }
        }]).exec((err, products) => {
            if (err) {
                rej(err);
            }
            res(products[0]);
        });

    });
}

export default {
    "createProduct": createProduct,
    "deleteProductByID": deleteProductByID,
    "readProductByID": readProductByID,
    "updateProductByID": updateProductByID,
    "searchProducts": searchProducts,
}