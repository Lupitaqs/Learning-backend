const Express = require('express');
const router = Express.Router();

const UserCtrl = require('../controllers/user');

router.post('/signup', UserCtrl.signup);
router.post('/login', UserCtrl.login);

module.exports = router;