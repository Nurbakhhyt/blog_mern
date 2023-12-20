 import { body } from 'express-validator';

 export  const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 8 символов').isLength({ min: 8 }),
    body('name', 'Укажите имя , имя должен быть минимум 3 символа').isLength({ min: 3 }),
    body('surname', 'Укажите фамилию').isLength({ max: 20 }),
    body('date').isDate(),
    body('avatar', 'Неверная ссылка на аватарку').optional().isURL(),
 ];