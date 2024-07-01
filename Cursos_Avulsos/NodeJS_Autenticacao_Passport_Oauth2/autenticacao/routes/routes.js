const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/index')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', controller.showIndex)
router.get('/signup', controller.showPageSignUp)
router.get('/members', controller.showMembersPage)
router.use(controller.get404Page)

module.exports = router
