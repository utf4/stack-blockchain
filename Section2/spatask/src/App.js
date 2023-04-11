import React, { useState, useEffect } from "react";
import FirstWidget from "./component/FirstWidget";
import SecondWidget from "./component/SecondWidget";
import ThirdWidget from "./component/ThirdWidget";
import axios from "axios";

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState("ETH");
  const [quotaCurrency, setQuotaCurrency] = useState("USDT");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);
  const [quotaCurrencyValue, setQuotaCurrencyValue] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async (baseCurrency, quotaCurrency) => {
      const url = `http://localhost:3000/exchange-rate?baseCurrency=${baseCurrency}&quoteCurrency=${quotaCurrency}`;
      try {
        await axios.get(url).then((response) => {
          console.log(response.data.exchangeRate, "data");
          setExchangeRate(response.data.exchangeRate);
          setQuotaCurrencyValue(response.data.exchangeRate * baseCurrencyValue);
        });
      } catch (error) {
        console.log("dlbnf");
        console.error(error);
      }
    };

    fetchExchangeRate("ETH", "USDT");
  }, [baseCurrency, quotaCurrency, baseCurrencyValue]);

  const handleBaseCurrencyChange = (currency) => {
    setBaseCurrency(currency);
  };

  const handleQuotaCurrencyChange = (currency) => {
    setQuotaCurrency(currency);
  };

  const handleBaseCurrencyValueChange = (value) => {
    setBaseCurrencyValue(value);
    setQuotaCurrencyValue(value * exchangeRate);
  };

  const handleQuotaCurrencyValueChange = (value) => {
    setQuotaCurrencyValue(value);
    setBaseCurrencyValue(value / exchangeRate);
  };

  return (
    <div className="container">
      <FirstWidget
        baseCurrency={baseCurrency}
        baseCurrencyOptions={["BTC", "ETH", "LTC", "XRP"]}
        onChangeBaseCurrency={handleBaseCurrencyChange}
        baseCurrencyValue={baseCurrencyValue}
        onChangeBaseCurrencyValue={handleBaseCurrencyValueChange}
      />
      <SecondWidget
        quotaCurrency={quotaCurrency}
        quotaCurrencyOptions={["USD", "EUR", "GBP", "JPY"]}
        onChangeQuotaCurrency={handleQuotaCurrencyChange}
        quotaCurrencyValue={quotaCurrencyValue}
        onChangeQuotaCurrencyValue={handleQuotaCurrencyValueChange}
      />
      {exchangeRate && (
        <ThirdWidget
          baseCurrency={baseCurrency}
          quotaCurrency={quotaCurrency}
          exchangeRate={exchangeRate}
        />
      )}
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 800px;
            padding: 0 20px;
          }

          @media only screen and (min-width: 768px) {
            .container {
              flex-direction: row;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
