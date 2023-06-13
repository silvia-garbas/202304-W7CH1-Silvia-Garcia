import mongoose from 'mongoose';
import { user, passwd, db } from '../config.js';


export const dbConnect = () => {
const uri = `mongodb+srv://silviagarbas:1973@cluster0.0imanav.mongodb.net/Curso_2023_04?retryWrites=true&w=majority`;
console.log(uri)

return mongoose.connect(uri);
};

