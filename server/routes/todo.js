const express = require("express");

const todoRoutes = express.Router();

const dbo = require("../db/conn");

todoRoutes.route("/todo").get(function (req, res) {
  let db_connect = dbo.getDb("producktivity");
  db_connect
    .collection("todos")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

todoRoutes.route("/todo/add").post(function (req, res) {
  let db_connect = dbo.getDb("producktivity");
  let myobj = {
    todo_text: req.body.todo_text,
    todo_done: req.body.todo_done,
  };
  db_connect.collection("todos").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

todoRoutes.route("/todo/:id").post(function (req, res) {
  let db_connect = dbo.getDb("producktivity");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      todo_text: req.body.todo_text,
      todo_done: req.body.todo_done,
    },
  };
  db_connect
    .collection("todos")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
todoRoutes.route("todo/:id").delete((req, res) => {
  let db_connect = dbo.getDb("producktivity");
  var myquery = { id: req.body.id };
  db_connect.collection("todos").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = todoRoutes;
