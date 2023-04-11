import React, { useState } from "react";
import "./FirstWidget.css";
const BaseCurrencyWidget = ({
  baseCurrency,
  baseCurrencyOptions,
  onChangeBaseCurrency,
  baseCurrencyValue,
  onChangeBaseCurrencyValue,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(baseCurrency);

  const handleCurrencyChange = (event) => {
    const { value } = event.target;
    setSelectedCurrency(value);
    onChangeBaseCurrency(value);
  };

  const handleCurrencyValueChange = (event) => {
    const { value } = event.target;
    onChangeBaseCurrencyValue(value);
  };

  return (
    <div className="first-widget">
      <label htmlFor="base-currency">Select a base currency:</label>
      <select
        id="base-currency"
        value={baseCurrency}
        onChange={handleCurrencyChange}
      >
        {baseCurrencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="base-currency-value">Enter the amount:</label>
      <input
        id="base-currency-value"
        type="number"
        step="0.01"
        min="0"
        value={baseCurrencyValue}
        onChange={handleCurrencyValueChange}
      />
    </div>
  );
};

export default BaseCurrencyWidget;
