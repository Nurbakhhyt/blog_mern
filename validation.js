 import { body } from 'express-validator';

 export  const loginValidation = [
   body('email', 'Неверный формат почты').isEmail(),
   body('password', 'Пароль должен быть минимум 8 символов').isLength({ min: 8 }),
];

 export  const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 8 символов').isLength({ min: 8 }),
    body('name', 'Укажите имя , имя должен быть минимум 3 символа').isLength({ min: 3 }),
    body('surname', 'Укажите фамилию').isLength({ max: 20 }),
    body('date').isDate(),
    body('avatar', 'Неверная ссылка на аватарку').optional().isURL(),
 ];


 export const postCreateValidation = [
   body('title', 'Введите заголовок статьи').isLength({ min:3 , max:100}).isString(),
   body('description', 'Введите описание статьи').isLength({min:10}).isString(),
   body('tags', 'Неверный формат тэгов (укажите массив)').optional().isString(),
   body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
 ];