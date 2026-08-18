const express = require("express");

const app = express ();
const port = 3000;
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/contact.hyml")
})

app.post("/contact",(req,res)=>{
    const {name,email} =req.body;

    res.send(`thank you, for This Website`)
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
