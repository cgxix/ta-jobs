const express = require('express')
const router = express.Router()
const Job = require('../models/job')

// view all jobs
router.get('/jobs', function(req, res, next) {
    console.log('lets go fetch jobs')
    res.send('see all jobs here')
})

// view 1 job
//router.get

// create new job
//router.post

// update job
//router.put

// delete job
//router.delete

module.exports = router