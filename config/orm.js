const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (tableInput, row, cb) => {
        const queryString = "INSERT INTO ?? SET ?"
        const values = [tableInput, row];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    

    updateOne: (tableInput, update, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        const values = [tableInput, update, condition]

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
};

module.exports = orm;
