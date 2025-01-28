import express from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const app = express();
const db = new pg.Client({});
const API = "https://covers.openlibrary.org/b/isbn/$value-S.jpg";
const port = 3000;

app.listen(port);
