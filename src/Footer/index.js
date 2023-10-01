import "./style.css";

const Footer = ({ result }) => (
  <p className="footer">
    Za podaną ilość wybranej waluty otrzymasz:
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;zł&nbsp;=
        {" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Footer;