const express = require('express')
const router = express.Router()
const {getAllToDoItems,createANewToDoItem,getAToDoItem,
updateAToDoItem,
deleteAToDoItem} = require('../controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createANewToDoItem)
router.route('/:id').get(getAToDoItem)
router.route('/:id').patch(updateAToDoItem)
router.route('/:id').delete(deleteAToDoItem)
module.exports = router