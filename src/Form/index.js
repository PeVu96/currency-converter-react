import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <span className="form__option">Wybierz walutę:</span>
      <label className="form__label">
        <select
          className="form__field"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
          required
        >
          {currencies.map((currency => (
            <option
              key={currency.short}
              value={currency.short}
            >
              {currency.name}
            </option>
          )))}
        </select>
      </label>
      <span className="form__option">Wartość w wybranej walucie:</span>
      <label className="form__label">
        <input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__field"
          type="number"
          placeholder="Wpisz wartość"
          required
          step="0.01"
        />
      </label>
      <button className="form__button">Przelicz!</button>
    </form>
  );
};

export default Form;