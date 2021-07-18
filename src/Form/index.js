import React, { useState } from 'react';
import Fieldset from "./Fieldset";
import Result from "./Result";
import { Select, Button, Loading, Failure, StyledImage } from "./styled.js";
import {useRatesData} from "../useRatesData";

const Form = () => {

    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];

        setResult({
            givenAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }


    return (
        <form onSubmit={onFormSubmit}>
            {ratesData.state === "loading"
                ? (
                    <>
                    <Fieldset
                    legendContent="Upsss..."
                    fieldsetBody={
                        <>
                        <Loading>
                        Chwila moment... <br /> Ładowanie kursów walut z Europejskiego Banku Centralnego.
                        </Loading> 
                        <StyledImage />
                </>
                    }>
                    </Fieldset>
                    </>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Wystąpił błąd! <br /> Sprawdź połączenie z internetem, jeżeli masz, błąd może być po naszej stronie. Spróbuj ponownie za jakiś czas.
                        </Failure>
                    ) : (
                        <>
                            <Fieldset
                                legendContent="Na jaką walutę, którą chcesz zamienić PLN?"
                                fieldsetBody={
                                    <label>
                                        <Select
                                            value={currency}
                                            onChange={(event) => setCurrency(event.target.value)}
                                        >
                                            {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))}
                                        </Select>
                                    </label>
                                }
                            />

                            <Fieldset
                                legendContent="Kwota którą chcesz przeliczyć ?"
                                fieldsetBody={
                                    <>
                                        Podaj kwotę w PLN:
                                        <Select as="input"
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            name="amount"
                                            type="number"
                                            step="0.01"
                                            required
                                        />
                                    </>
                                }
                            />

                            <p>
                                <Button>Przelicz</Button>
                            </p>

                            <Result result={result} />
                        </>
                    )
                )}
        </form>
    );
};

export default Form;
