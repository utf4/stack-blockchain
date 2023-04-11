import React from "react";
import "./QuotaCurrencyWidget.css";

const QuotaCurrencyWidget = ({ baseCurrency, quotaCurrency, exchangeRate }) => {
  return (
    <div className="quota-currency-widget">
      <p>
        1 {baseCurrency} = {exchangeRate} {quotaCurrency}
      </p>
    </div>
  );
};

export default QuotaCurrencyWidget;
