const express = require('express')
const router = express.Router()
const {getAllToDoItems,createANewToDoItem} = require('../controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createANewToDoItem)
module.exports = router