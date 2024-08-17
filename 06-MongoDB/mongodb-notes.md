# MongoDB

[Back to Index](../index.md)

## Index

| Sr. No. | Link to Topic Document |
|:---:|:---:|
| 1. | [Introduction & Core Concepts](#1) |
| 2. | [CRUD](#2) |
| 3. | [Querying](#3) |
| 4. | [Indexing](#4) |
| 5. | [Work with Mongoose](#5) |


<a id="1"></a>

## Introduction

- MongoDB is a popular, open-source NoSQL database designed for storing and managing large volumes of data. 
- Unlike traditional relational databases, MongoDB uses a flexible, document-oriented model, which allows you to store data in JSON-like structures called BSON (Binary JSON) documents. 
- This makes it easier to handle complex data types and scale horizontally across multiple servers.
- use `mongosh` to interact with MongoDB database via cmd. 

- `use database-name` to access an existing db, or create a new db and access it if not exists.

- `show collections` to check all collections inside db. collections are similar to tables from SQL.

- `db.dropDatabase()` to drop the current database.

- In mongodb, if something doesn't exists it will automatically get created if we try to add something else in it.

- `show dbs` shows the list of db available.

- we use db to access the current database and using .method-name() we can perform various operations on current db.

---

<a id="1"></a>

## CRUD

- `db.collection-name.insertOne(json-data)` to insert a single record in JSON format.

- `db.users.find()` to get contents of users collection.

- Every single piece of data we insert in a collection is a document. Every document is a part of collection and every collection is a part of a database.

- `db.users.insertMany([object1, object2])` takes an array of JSON objects to add multiple entries in a collection.

- Update query `db.users.updateOne({condition}, { $set:{values} })`.

- Apart from set, we can use **inc** to increment a numeric column, **rename** to rename a column, **unset** to unset a column value.

- Also, updateMany can be used to update multiple documents that matches the condition.

- Similar to update, deleteOne() and deleteMany() can be used to delete objects based on conditions.

---

<a id="1"></a>

## Querying

- `db.users.find().sort({col-name: 1})` sorts collection based on JSON key of documents and 1 denotes ascending, -1 denotes descending. 
- Use .limit(int) to limit the entries printed by find() function.
- Use .skip(int) to skip n number of starting rows/documents.

- `db.users.find( {name: "Rishil"} )` this is like the where clause in SQL. pass an object with key and value that we want to filter based on.

- To get only certain keys from a document, pass a second argument after filtering which is an object where key is the field we want and value is either 1 or 0 meaning 1 means return value and 0 means don't return value.

- Complex Query : `db.users.find( {key-name: { $operation: value }} )` here operations can be many things, lte (less than equal to) lt (less than), gte, gt, in (in a list of values), exists (if a key exists in a given document), etc. Use n as prefix for them to use not i.e. negation of that operation.

- Adding multiple keys inside find object basically means adding multiple filter conditions. It works as **AND** operation.

- To do **OR** operation, use `db.users.find( { $or: [ {condition-1}, {condition-2} ] } )`

- use `db.users.countDocuments(condition)` to count the occurrences after filtering based on condition.

---

<a id="1"></a>

## Indexing

---

<a id="1"></a>

## Work with Mongoose
