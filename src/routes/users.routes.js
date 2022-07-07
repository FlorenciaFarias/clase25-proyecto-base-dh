const { Router } = require('express');
const router = Router();
const { register, login, process } = require ('../controllers/users.controller');
const middlewares = require('../middlewares/register');

router.get('/register', register);
router.post('/register',middlewares, process )
router.get('/login', login);

module.exports = router;