import express, { request } from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();

const db = new pg.Client({
  host: "localhost",
  database: "bookNotes",
  password: "023702",
  user: "postgres",
  port: 5432,
});

//db.connect();

const API = "https://covers.openlibrary.org/b/isbn/$value-M.jpg";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://covers.openlibrary.org/b/OLID/OL8020853M-M.jpg"
    );
    const img = "https://covers.openlibrary.org/b/OLID/OL8020853M-M.jpg";
    console.log(result);
    res.render("main.ejs", { bookCover: img });
  } catch (error) {
    console.log(error);
  }
});

app.get("/newBook", (req, res) => {
  res.render("new.ejs");
});

app.post("/newBook", async (req, res) => {
  console.log(req.body);
});

app.listen(port);
