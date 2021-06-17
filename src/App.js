import React, {useState} from "react";
import Header from "./Header";
import Container from "./Container";
import Form from "./Form";
import currencies from "./Currencies/currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({short}) => short === currency).rate;

    setResult({
      givenAmount: +amount,
      targetAmount: amount/rate,
      currency,
    });
  }
  return (
    <>
    <Header title="KALKULATOR WALUT" />
    
    <Container> 
      <Form calculateResult={calculateResult} result={result}/>
    </Container>
    </>
  );
}

export default App;
