import express, { request, response } from "express";

const app = express();

const Port = process.env.Port || 3000;

app.get("/",(request, response)=>{ 
    response.send({msg: "hello!"});
});

app.get('/api/users',(request, response)=>{
    response.send([
        {id:1, username:"anesu", displayName:"anesu"},
        {id:2, username:"Justsee", displayName:"justsee"},
        {id:3, username:"Matthew", displayName:"Matthew"},
        {id:4, username:"howcome", displayName:"howcome"},
        {id:5, username:"whyme", displayName:"whyme"}
    ]);
});
app.get('/api/products',(request, response)=>{
    response.send([
        {id:1, username:"anesu", displayName:"anesu"},
        {id:2, username:"Justsee", displayName:"justsee"},
        {id:3, username:"Matthew", displayName:"Matthew"},
        {id:4, username:"howcome", displayName:"howcome"},
        {id:5, username:"whyme", displayName:"whyme"}
    ]);
});


    


app.listen(Port, () =>{
    console.log(`Running on Port ${Port}`);
});
