const express = require("express");

const todoRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

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
    text: req.body.text,
    done: req.body.done,
  };
  db_connect.collection("todos").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

todoRoutes.route("/todo/:id").post(function (req, res) {
  let db_connect = dbo.getDb("producktivity");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      text: req.body.text,
      done: req.body.done,
    },
  };
  db_connect
    .collection("todos")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
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
