const express = require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send('List of all to-do items')
})
module.exports = router