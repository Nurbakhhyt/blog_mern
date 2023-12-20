import  express  from 'express';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import {registerValidation} from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import { register, login, profile } from './controllers/UserController.js'


mongoose
        .connect('mongodb+srv://bolatovnurbakhyt:bimode26@cluster0.ps6brhc.mongodb.net/blog?retryWrites=true&w=majority')
        .then(() => console.log('DB ok'))
        .catch((err) => console.log('DB error' , err));

const app = express();

app.use(express.json());
app.post('/auth/login', login);
app.post('/auth/register' , registerValidation, register);

app.get('/auth/profile', checkAuth , profile);

app.listen(3000 , (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});