const mysql = require("mysql");

if (proccess.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: process.env.PORT || 3306,
        user: "root",
        password: "mazda2020",
        database: "burger_db"
    });
}


connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${
            err.stack
        }`);
        return;
    }
    console.log(`connected as id ${
        connection.threadId
    }`);
});

module.exports = connection;
