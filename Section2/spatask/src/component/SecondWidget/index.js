import React, { useState } from "react";
import "./ExchangeRateWidget.css";

const ExchangeRateWidget = ({
  quotaCurrency,
  quotaCurrencyOptions,
  onChangeQuotaCurrency,
  quotaCurrencyValue,
  onChangeQuotaCurrencyValue,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(quotaCurrency);

  const handleCurrencyChange = (event) => {
    const { value } = event.target;
    setSelectedCurrency(value);
    onChangeQuotaCurrency(value);
  };

  const handleCurrencyValueChange = (event) => {
    const { value } = event.target;
    onChangeQuotaCurrencyValue(value);
  };

  return (
    <div className="exchange-rate-widget">
      <label htmlFor="quota-currency">Quota Currency:</label>
      <select
        id="quota-currency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        className="currency-select"
      >
        {quotaCurrencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor="quota-currency-value" className="currency-label">
        Amount:
      </label>
      <input
        id="quota-currency-value"
        type="number"
        value={quotaCurrencyValue}
        onChange={handleCurrencyValueChange}
        className="currency-input"
      />
    </div>
  );
};

export default ExchangeRateWidget;
