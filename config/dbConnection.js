const mysql = require('mysql');

const connMysql =() =>{
    return mysql.createConnection({
        host:"host",
        user:"root",
        password:"####",
        database:"database"
    });
}
module.exports = () => {
    return connMysql;
}