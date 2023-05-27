const { request } = require("express")

const getAllToDoItems = (request,response)=>{
    response.send('List of all to-do items')
}
const createANewToDoItem = (request,response)=>{
   // response.send('This is a post method')
   response.json(request.body)
}
const getAToDoItem = (request,response)=>{
    response.send(`The id value is ${request.params.id}`)
}
const updateAToDoItem =  (request,response)=>{
    response.send(`update is ${request.params.id}`)
}
const deleteAToDoItem =  (request,response)=>{
    response.send(`delete is ${request.params.id}`)
}
module.exports = {getAllToDoItems,createANewToDoItem,getAToDoItem,updateAToDoItem,deleteAToDoItem}