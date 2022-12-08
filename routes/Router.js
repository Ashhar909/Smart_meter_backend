const express = require('express')
const router = express.Router();
const dataC = require('../controllers/dataController')

router.post('/addData',dataC.addData);
router.get('/getData',dataC.getData);

module.exports = router;