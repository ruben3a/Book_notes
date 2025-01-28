import express, { request } from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const db = new pg.Client({});
const API = "https://covers.openlibrary.org/b/isbn/$value-S.jpg";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://covers.openlibrary.org/b/isbn/OL1317211W-S.jpg"
    );
    console.log(result.data);
    res.send(result.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);
