import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

inquirer
  .prompt([
    {
      message: "give url-",
      name: "url",
    },
  ])
  .then((answers) => {
    const URL = answers.url;
    var qr_png = qr.image(URL);

    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile(path.join(__dirname, "qr_links.txt"), URL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
