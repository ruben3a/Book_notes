import express, { request } from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const db = new pg.Client({});
const API = "https://covers.openlibrary.org/b/isbn/$value-M.jpg";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://covers.openlibrary.org/b/isbn/OL1317211W-M.jpg"
    );
    const img = "https://covers.openlibrary.org/b/OLID/OL8020853M-M.jpg";
    console.log(result.data);
    res.render("main.ejs", { bookCover: img });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);
