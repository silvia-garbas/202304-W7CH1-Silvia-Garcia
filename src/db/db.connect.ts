


import mongoose from 'mongoose';
import { user, passwd, db } from '../config.js';


export const dbConnect = () => {
const uri = `mongodb+srv://silviagarbas:1973@cluster0.0imanav.mongodb.net/${db}?retryWrites=true&w=majority`
console.log(uri)

return mongoose.connect(uri);
};

