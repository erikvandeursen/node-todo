const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/app/views');

let db = new sqlite3.Database('../../database/todo.db', sqlite3.OPEN_READWRITE (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('Connected to the SQLite database');
});

/* Index route */
app.get('/', (req, res) => {
  db.serialize(() => {
    db.each('SELECT * FROM items', (err, row) => {

    });
  });
  db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the sqlite3 connection");
  });
  res.setHeader("Content-Type", "text/html");
  res.render('index');
  res.end();
});

/* Done tasks route */
app.get('/done', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.render('done');
  res.end();
});

/* Login route */
app.get('/login', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.render('login');
  res.end();
});


module.exports = app;