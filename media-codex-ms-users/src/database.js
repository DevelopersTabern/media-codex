const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '192.168.99.100',
    user : 'root',
    port: '3307',
    password: 'abc123',
    database: 'MediaCodex'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('DB is connected')
    }
});

module.exports = mysqlConnection;