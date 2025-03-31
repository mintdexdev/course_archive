import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = dbInit();
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const countries = await visitedCountries();
  res.render("index.ejs", { countries: countries, total: countries.length });
})

app.post("/add", async (req, res) => {
  const input = req.body["country"].toLowerCase().trim();
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';", 
      [input]
    );
    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode])
      res.redirect("/");
    } catch (err) {
      errorCatch(err,res);
    }
  } catch (err) {
    errorCatch(err,res);
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//functions
//database initialize 
function dbInit() {
  return (
    new pg.Client({
      user: "postgres",
      host: "localhost",
      database: "world",
      password: "deepak12",
      port: 5432,
    })
  )
}

//visited countries
async function visitedCountries() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code)
  })
  return countries;
}

//err catch
async function errorCatch(err,res) {
  console.log(err);
  const countries = await visitedCountries();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    error: "Country is already added"
  });
}