const router = require('express').Router();
const {PVT_ROUTE} = require('../controller/verifytoken');

router.route('/')
      .post(PVT_ROUTE);

module.exports = router;