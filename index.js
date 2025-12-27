require('dotenv').config();
const express = require('express');
const app = express();
const port  = 4000;

app.get("/home",(req ,res)=>{
  res.send("<h1>hey!! Home page</h1>")
})
app.listen(process.env.PORT,()=>{
  console.log(`App listingin on port ${port}`)
});