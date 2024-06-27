const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 4000; 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
const Menu = require("./routes/routes")
app.use("/api/v1", Menu)
app.listen(PORT,()=>{
    console.log("server started")
})
const dbconnect = require("./config/Database")
dbconnect()
