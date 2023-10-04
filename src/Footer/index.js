import "./style.css";

const Footer = ({ result }) => (
  <p className="footer">
    Za podaną ilość wybranej waluty otrzymasz:&nbsp;
    {result !== undefined && (
      <>
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Footer;