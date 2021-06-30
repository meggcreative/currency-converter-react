import React, { useState } from 'react';
import Fieldset from "./Fieldset";
import currencies from "../Currencies/currencies";
import Result from "./Result";
import { Select, Button } from "./styled.js"


const Form = ({ calculateResult, result }) => {

    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset
                legendContent="Na jaką walutę, którą chcesz zamienić PLN?"
                fieldsetBody={
                    <label>
                        <Select
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.label}
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
        </form>
    );
};

export default Form;
