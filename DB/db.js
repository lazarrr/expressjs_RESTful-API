const sqlite = require("sqlite3").verbose()
require("dotenv/config")

function db_open(){
    
    return new sqlite.Database(process.env.DB_CONNECTION, (err)=>
    {
        if(err)
            console.log("Db error " + err);
    });
}


module.exports = db_open;