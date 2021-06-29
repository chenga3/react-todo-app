const express = require("express");
const todoRoutes = express.Router();

const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

const dbName = "producktivity";
const colName = "todos";

/** Gets all todos. */
todoRoutes.route("/todo").get(function (req, res) {
  let db_connect = dbo.getDb(dbName);
  db_connect
    .collection(colName)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

/** Creates a new todo. */
todoRoutes.route("/todo").post(function (req, res) {
  let db_connect = dbo.getDb(dbName);
  let myobj = {
    text: req.body.text,
    done: req.body.done,
  };
  db_connect.collection(colName).insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

/** Updates a single todo. */
todoRoutes.route("/todo/:id").post(function (req, res) {
  let db_connect = dbo.getDb(dbName);
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      text: req.body.text,
      done: req.body.done,
    },
  };
  db_connect
    .collection(colName)
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(res);
    });
});

/** Deletes all done todos. */
todoRoutes.route("/todo/done").delete((req, res) => {
  let db_connect = dbo.getDb(dbName);
  let myquery = { done: true };
  db_connect.collection(colName).deleteMany(myquery, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});

/** Deletes a single todo. */
todoRoutes.route("/todo/:id").delete((req, res) => {
  let db_connect = dbo.getDb(dbName);
  var myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection(colName).deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log(res);
  });
});

module.exports = todoRoutes;
