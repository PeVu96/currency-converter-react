import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container className="container">
      <Header />
      <Section
        body={
          <Form
            calculateResult={calculateResult}
          />
        }
      />
      <Footer result={result} />
    </Container>
  );
}

export default App;
