const sql=require('mysql2')
require("dotenv").config()

const con=sql.createConnection(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database



    }
)

con.connect(err=>
{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("connected")

}
)
function getAllPlayers()
{
    return new Promise(function(success,err)
{
    con.query(`select * from Jersynumbers`,function(err,rows)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        success(rows)
    }
})
})
}

function getPlayer(nu)
{
    return new Promise(function(success,res)
{
    con.query(`select * from Jersynumbers where number=?`,[nu],function(err,res)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        success(res)
    }
})
})
}

function addData(nu,na,cou,id)
{
    return new Promise(function(success,err)
{
    con.query(`insert into Jersynumbers(number,name,country) values(?,?,?)`,[nu,na,cou]),function(err,res)
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            success(err)
        }
    }
})
}

function updatePlayer(nu,na,co,id)
{
    return new Promise(function(err,success)
{
    con.query(`update Jersynumbers set number=?,name=?,country=? where number=?`,[nu,na,co,id],function(err,res)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        success(res)
    }
})
})
}

function deletePlayer(nu)
{
    return new Promise(function(err,success)
{
    con.query(`delete from Jersynumbers where number=?`,[nu],function(err,res)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(nu)
        success(res)
    }
})
})
}

module.exports={addData,getAllPlayers,getPlayer,deletePlayer,updatePlayer}