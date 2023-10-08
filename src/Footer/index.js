import "./style.css";

const Footer = ({ result }) => (
  <p className="footer">
    Za podaną ilość polskich złotych otrzymasz:&nbsp;
    {result && (
        <span className="footer__result">
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </span>
    )}
  </p>
);

export default Footer;