const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");

app.use(bodyParser.json());
app.get("/api/drinks", (req, res) => {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then((result) => {
      if (result.status >= 400) {
        throw new Error("Bad response from server");
      }
      return result.json();
    })
    .then((drinks) => {
      return res.send({ drinks: drinks.drinks });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post("/api/drink", async (req, res) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.post}`
  )
    .then((result) => {
      if (result.status >= 400) {
        throw new Error("Bad response from server");
      }
      return result.json();
    })
    .then((drinks) => {
      console.log(drinks.drinks[0].strIBA);
      return res.send({ drink: drinks.drinks[0].strIBA });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
