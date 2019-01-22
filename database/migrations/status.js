'use strict';

const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
const fs = require('fs');

module.exports = { 
    /* Migration function for setting up the items table */
    up: function () {
        return new Promise((resolve, reject) => {
            /* if not exist, create db */
            if (fs.existSync('./database/todo.db')) {
                let db = new sqlite3.Database('../database/todo.db'); 
                db.run(
                    'CREATE TABLE Status(id INTEGER PRIMARY KEY, status BOOLEAN);'
                );
            } else {
                console.log('todo.db exists');
            }
        });
    },

    /* In case of a rollback, bring table back to the initial state */
    down: function() {
        return new Promise((resolve, reject) => {
            let db = new sqlite3.Database('../database/todo.db');
            db.run(
                'DROP TABLE Items;'
            );
        });
    }
};