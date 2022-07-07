const { Router } = require('express');
const router = Router();
const { register, login, process } = require ('../controllers/users.controller');
const registerValidation = require('../validaciones/register');

router.get('/register', register);
router.post('/register',registerValidation, process )
router.get('/login', login);

module.exports = router;