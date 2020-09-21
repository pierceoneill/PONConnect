const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get current users profile
// @access   Private
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
