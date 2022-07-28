const mysql =require('mysql');

//my sql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: '****',
    password:'*****',
    database: 'dbms',

});

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected Successfully!!!!!")
} )

module.exports = dbConn
