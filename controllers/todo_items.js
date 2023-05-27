const getAllToDoItems = (request,response)=>{
    response.send('List of all to-do items')
}
const createANewToDoItem = (request,response)=>{
   // response.send('This is a post method')
   response.json(request.body)
}
module.exports = {getAllToDoItems,createANewToDoItem}