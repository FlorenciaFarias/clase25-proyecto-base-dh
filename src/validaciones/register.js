const { body } = require('express-validator');

const register = [
    body('nombre').notEmpty().withMessage('El nombre no puede quedar vacío').bail().isLength({ min : 2}).withMessage('El nombre debe contener mínimo dos caracteres.').bail(),
    body('apellido').notEmpty().withMessage('El nombre no puede quedar vacío').bail().isLength({ min : 2}).withMessage('El nombre debe contener mínimo dos caracteres.').bail(),
    body('email').notEmpty().withMessage('El email no puede quedar vacío.').bail().isEmail().withMessage('El formato de email no es válido.').bail(),
    body('password').notEmpty().withMessage('La contraseña no puede quedar vacía.').bail().isLength({min : 4}).bail()

]

module.exports = register;

