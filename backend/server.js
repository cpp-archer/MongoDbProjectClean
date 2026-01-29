const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");

//const path = require("path");
const tasksRoutes = require("./routes/tasksRoute");

const app = express();
const PORT = 5555;  

//connexion à MongoDB 
mongoose.connect("mongodb://localhost:27017/BDDrj");

app.use(cors({
  origin:  "http://localhost:3001",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//on recup les routes API
app.use("/api/tasks", tasksRoutes); 

app.get("/api", (req, res) => {    
    res.json({ message: "api good , tapez {apiTasks}" });

});

app.listen(PORT, () => {
    console.log(`ça marche sur http://localhost:${PORT}`);
});