import "./style.css";

const Form = () => (
  <form className="form">
    <span className="form__option">Wybierz walutę:</span>
    <label className="form__label">
      <select className="form__field" name="currency" required>
        <option disabled selected>Wybierz walutę</option>
        <option value="eur">Euro (€)</option>
        <option value="usd">Dolar amerykański ($)</option>
        <option value="gbp">Funt brytyjski (£)</option>
        <option value="chf">Frank szwajcarski (₣)</option>
      </select>
    </label>
    <span className="form__option">Wartość w wybranej walucie:</span>
    <label className="form__label">
      <input className="form__field" type="number" name="value" placeholder="Wpisz wartość" required
        step="0.01" />
    </label>
    <button className="form__button">Przelicz!</button>
  </form>
);

export default Form;