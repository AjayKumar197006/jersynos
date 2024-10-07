require("dotenv").config()
const express=require("express")
const sql=require("mysql2")
const db=require("./db")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.listen(8000,()=>
{
    console.log("started")
})

app.get('/players',(req,res)=>
{
    db.getAllPlayers()
    .then((data)=>
    {
        
        res.send(data)
        
    })
    .catch((err)=>
    {
        console.log(err)
        res.send(err)
    })
})

app.get('/player/:number',(req,res)=>
{
    const id=req.params.number
    db.getPlayer(id)
    .then((data)=>
    {
        console.log(data)
        res.send(data)
    })
    .catch((err)=>
    {
        console.log(err)
        res.send(err)
    })
})
app.post('/player',(req,res)=>
{
    console.log("entered")
    db.addData(req.body.number,req.body.name,req.body.country)
    .then((data)=>
    {
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})
app.put('/player/:number',(req,res)=>
{
    const id=req.params.number
    console.log(id)
    db.updatePlayer(req.body.number,req.body.name,req.body.country,id)
    .then((data)=>
    {
        console.log(req.body)
        res.send(req.body)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})

app.delete('/player/:number',(req,res)=>
{
    const id=req.params.number
    db.deletePlayer(id)
    .then((data)=>
    {
        res.send(req.body)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})
