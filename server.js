const express = require("express");
const books = require("./data/books.json");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/books", (_, res) => res.send(books));

app.listen(9001, () => console.log("API Running on http://localhost:9001"));
