import express from "express";
import body_parser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.use(body_parser.urlencoded({ extended : true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});


app.get("*", (req, res) => {
  res.send("custom");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
