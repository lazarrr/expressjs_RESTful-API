const express = require("express")
const router = express.Router()
const db_open = require("../DB/db")
const jwt = require("jsonwebtoken")
const SHA256 = require("crypto-js/sha256")

require("dotenv/config")
var db


router.post("/",(req,res) => {

    db = db_open()
    const name = req.body.name
    const pass = req.body.pass
    const hashPass = SHA256(pass)

    db.get(`select * from Users where name='${name}' and pass='${hashPass}'`,async (err,row)=>{
        
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else if(row != undefined)
        {
            const user = {
                name : name
            }
        
            const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        
            res.status(200).send({accessToken:accessToken})
        }
        else{
            res.status(403).send({accessToken:null})
        }
        
    });
        
        
    db.close();


});




module.exports = router