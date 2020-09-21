const express = require('express');
const router = express.Router();

// @route    GET api/user
// @desc     Get current users profile
// @access   Private
router.get('/', (req, res) => res.send('User route'));

module.exports = router;
