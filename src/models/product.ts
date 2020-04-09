import { IProduct } from '../interfaces/IProduct';
import mongoose, { Schema } from 'mongoose';

const ProductSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter the product name'],
            index: true,
        },

        description: {
            type: String,
            required: [true, 'Please enter the product description'],
        },

        price: {
            type: Number,
            required: [true, 'Please enter the product price'],
        },

    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IProduct & mongoose.Document>('Product', ProductSchema);