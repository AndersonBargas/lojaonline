import mongoose from 'mongoose';
import { Db } from 'mongodb';
import configs from '../configs';

export default async (): Promise<any> => {

    return await mongoose.connect(configs.databaseURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

};