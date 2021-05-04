'use strict';

const express = require('express');
const router = express.Router();

const user_controller = require('../service/user.ts')

router.get('/find/:email', user_controller.findOneByEmail)

router.post('/create', user_controller.create)

module.exports = router;