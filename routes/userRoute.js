const express = require("express")
const router = express.Router()
const db_open = require("../DB/db")
const { authenticateToken, authorization } = require("../auth") 

require("dotenv/config")
var db

router.get("/users",authenticateToken,(req,res) => {

    db = db_open()

    db.all("select name from Users",(err,rows) => {
      
        if(err){
            res.status(500).json(
                {
                    "error":err
                }
            )
        }else{

            res.status(200).json({
                "data":rows
            })
    }
    });

    
    db.close()
});

router.delete("/user", authenticateToken, authorization, (req, res) => {
    
    db = db_open()
    const name = req.body.name

    db.all(`select * from Users where name='${name}'`,(err,row) => {
        
        if(err){
            res.status(500).json(
                {
                    "error":err
                }
            )
            } else if(row.length != 0){

                db.run(`delete from Users where name='${name}'`,(err) => {
                    if(err){
                        res.status(500).json({
                            "error":err
                        })
                    } else{
                        res.status(204)
                    }
                })
        } else{
            res.status(200).json({
                "message":"User does not exist"
            })
        }
        
    });

    
    db.close()
})



module.exports = router