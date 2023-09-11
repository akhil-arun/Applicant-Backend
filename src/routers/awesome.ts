const express = require('express')
const router = express.Router()

const {getApplicant, update} = require('../controllers/awesome')

router.get('/', getApplicant)

router.put('/:id', update)

module.exports = router
