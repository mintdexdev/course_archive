import express from "express";
const APP = express();
const PORT = 5000;

APP.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
APP.get("/about", (req, res) => {
  res.send("<h1>About Me Page</h1>");
});

APP.post("/contact", (req, res) => {
  res.sendStatus(201);
});

APP.put("/user/dex", (req, res) => {
  res.sendStatus(200);
});

APP.patch("/user/dex", (req, res) => {
  res.sendStatus(200);
});

APP.delete("/user/dex", (req, res) => {
  res.sendStatus(200);
});


APP.listen(PORT, () => {
  console.log(`Server Running on port- ${PORT}`);
});
