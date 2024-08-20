import app from './app.js';
import "./database.js";

app.get("/getAll",(req, res)=>{
    res.json({message:"Hola soy Ami"})
});

app.listen(app.get("port"),()=>{
    console.log("Server on port", app.get("port"));
})