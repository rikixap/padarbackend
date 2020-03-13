const express = require("express")
const router = express.Router()
const donors_controller = require('../controllers/donors.controller')

router.post('/post', donors_controller.donors_post)
router.get('/donors', donors_controller.donors_all)
router.delete('/delete/:id', donors_controller.donors_delete)


module.exports = router