const express = require('express');
const router = express.Router();

// @route    GET api/profile
// @desc     Get current users profile
// @access   Private
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
