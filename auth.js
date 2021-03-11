require("dotenv/config")
const jwt = require("jsonwebtoken")
const jwt_decode = require("jwt-decode")

function authenticateToken (req,res,next) 
{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null)
    {
        return res.sendStatus(401)
    }

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
        if(err)
        {
            return res.sendStatus(403)
        }
        
        req.user = user
        next()
    })
}

// authorization role of users for deleting other users
function authorization(req, res, next){
    
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    // take user from token who try to delete some other user
    const user = jwt_decode(token)

    if(user.name === "admin"){
        next()
    }
    else{
        res.status(403).json({
            "message":"You'r not authorized to delete users"
        })
    }
    

}


module.exports = {
    authenticateToken,
    authorization
}