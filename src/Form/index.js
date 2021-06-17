import React, {useState} from 'react';
import "./style.css";
import Fieldset from "./Fieldset";
import currencies from "../Currencies/currencies";
import Result from "./Result";


const Form = ({calculateResult, result}) => {

    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) =>{
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <Fieldset 
                legendContent="Na jaką walutę, którą chcesz zamienić PLN?"
                fieldsetBody={
                    <label className="form__label">     
                        <select 
                            className="form__amount"
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
                        </select>  
                    </label>
                }
            />
                   
            <Fieldset 
                legendContent="Kwota którą chcesz przeliczyć ?"
                fieldsetBody={
                    <>
                    Podaj kwotę w PLN:
                    <input
                        value={amount}
                        onChange={({target}) => setAmount(target.value)} 
                        className=" form__amount" 
                        name="amount" 
                        type="number" 
                        step="0.01" 
                        required
                    />
                    </>
                }    
            />
                    
            <p>
                <button className="form__button">Przelicz</button>
            </p>

            <Result result={result}/>
        </form>
    );
};

export default Form;
