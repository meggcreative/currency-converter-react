import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import Clock from "./Clock";


function App() {
  
  return (
    <>

      <Header title="KALKULATOR WALUT" />

      <Container>
        <Clock />
        <Form />
      </Container>

    </>
  );
}

export default App;
