//  23.2 
// const FS = require("fs");
// const path = require("path");

FS.writeFile(path.join(__dirname, "message.txt"), "Hello world, Node js first code", (err) => {
  if (err) throw err;
  console.log("file created");
});

// FS.readFile(path.join(__dirname, "message.txt"), "utf8", (err, file_data) => {
//   if (err) throw err;
//   console.log(file_data);
// });

// 23.3
// common js
// var generateName = require('sillyname');

// ECHMA SCRIPT
// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(sillyName);

// import {randomSuperhero} from "superheroes";
// console.log("I am", randomSuperhero(), "fear me!");