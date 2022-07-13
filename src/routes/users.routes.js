const { Router } = require('express');
const router = Router();
const { register, login, process, access,logout } = require ('../controllers/users.controller');
const middlewareRegister = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login')
const isLogged = require('../middlewares/isLogged')
router.get('/register', register);
router.post('/register',middlewareRegister, process )
router.get('/login', login);
router.post('/access',middlewareLogin,access)
router.get('/logout',[isLogged],logout)

module.exports = router;