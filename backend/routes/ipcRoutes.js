const express = require('express');
const { getAllData, getDataById } = require('../controllers/ipcController'); 

const router = express.Router();

router.get('/', getAllData);
router.get('/:id', getDataById);

module.exports = router;
