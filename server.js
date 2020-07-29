const express = require('express'); 
const app = express(); 
app.use(express.json());
 
const PORT = process.env.PORT || 5000; 
 
app.listen(PORT,() => {
  console.log("Server on port: ", PORT);
})
 
app.get("/", (req,res) => {
  res.send("You are in the homepage");
})
 
app.post("/post", (req,res) => {
  res.send(`Welcome ${req.body.username}`);
})
 
app.delete("/delete", (req,res) => {
  res.send("delete: true");
})
 
app.put("/put/:ID", (req,res) =>{
  res.send(`Task ${req.params.ID} has been updated`);
})
