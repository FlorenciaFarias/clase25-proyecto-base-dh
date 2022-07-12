const { Router } = require('express');
const router = Router();
const { register, login, process, access } = require ('../controllers/users.controller');
const middlewareRegister = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login')
router.get('/register', register);
router.post('/register',middlewareRegister, process )
router.get('/login', login);
router.post('/access',middlewareLogin,access)

module.exports = router;