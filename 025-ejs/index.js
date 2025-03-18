import { renderFile } from "ejs";
import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    // first video
    const day = new Date().getDay();
    let dayType = "weekday", advice = "work more"
    if (day === 0 || day === 6) {
        dayType = "weekend"
        advice = "there is no time to rest"
    }

    // scond video
    const data = {
        title: "ejs tags",
        seconds: new Date().getSeconds(),
        fruits: ["apple", "banana", "cherry"],
        htmlContent: "<em> This is some em text</em>"
    };

    
    const renderFile = {
        dayType: dayType,
        advice: advice,
        data: data,
    }
    res.render("index.ejs", renderFile)
})

//third video
app.post("/submit", (req, res)=>{
    
    let lenName = req.body["fName"].length + req.body["lName"].length;
    const renderFile = {
        nameLength: lenName
    } 
    res.render("NameLength.ejs", renderFile)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})