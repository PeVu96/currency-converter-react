import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Container from "./Container";

function App() {
  return (
    <Container className="container">
      <Header />
      <Section
        body={
          <Form />
        }
      />
      <Footer />
    </Container>
  );
}

export default App;
