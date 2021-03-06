const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },


    // The variables cols and vals are arrays.
    insertOne: (newBurger, cb) => {
      orm.insertOne("burgers", newBurger, (res) => {
        cb(res);
      });
    },


    
    updateOne: (data, criteria, cb) => {
      orm.updateOne("burgers", data, criteria, (res) => {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;