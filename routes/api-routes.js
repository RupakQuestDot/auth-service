const router = require('express').Router();
const user = require('./userRoute');
const authentication = require('./authRoute');
const verifytoken = require('./verifytoken');
//Test Route
router.get('/', function (req, res) {
    res.json({
        message: 'Welcome to CRUD APP API..!'
    });
});


router.use('/users', user);
router.use('/auth', authentication);
router.use('/verifytoken', verifytoken);

module.exports = router;