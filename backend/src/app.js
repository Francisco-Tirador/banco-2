
import express from "express"
import cors from "cors"
import { accesos, users } from "./db/index.js"





const app=express()

app.use(express.json())

app.use(cors({
    origin:"*",
    optionsSuccessStatus:"200"
})) 

app.get("/banco/userse",(req,res)=>{
    res.status(200).json(users)
})

app.get("/banco/users/:id",(req,res)=>{
    const user=users.find(u=>u.id==req.params.id)
    res.status(200).json(user)
})

app.post("/banco/auth",(req,res)=>{

    const userio=req.body.user
    const password=req.body.password
    const user=accesos.find(u=>u.usuario==userio)
    if(!user||user.password!=password){
    return   res.status(401).json({message:"credenciales erroneas"})        
    }
    res.status(200).json(user)
})




const puerto=2157

app.listen(puerto,()=>{
    console.log(
        "estamos en el puerto",puerto
    )
})








