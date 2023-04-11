const express = require("express");
const request = require("request");
var cors = require("cors");

const app = express();
const port = 3000;
const API_KEY = "";
app.use(cors());
// Define your API endpoint
app.get("/exchange-rate", (req, res) => {
  const { baseCurrency, quoteCurrency } = req.query;

  // Make a request to the CoinMarketCap API
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${baseCurrency}&convert=${quoteCurrency}`;
  const options = {
    url: url,
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
    },
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
      return;
    }

    const data = JSON.parse(body);
    const exchangeRate = data.data[baseCurrency].quote[quoteCurrency].price;

    // Return the exchange rate to the client-side application
    res.send({ exchangeRate });
  });
});
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});
