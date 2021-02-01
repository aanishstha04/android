
const express = require('express');
const {findStudent} = require("../controllers/student");
const {createStudent} = require("../controllers/student");


const router = express.Router();


router.post('/student/create', createStudent);

router.get('/student/fetch', findStudent);

// router.get('/student/get', getStudent);
module.exports = router;