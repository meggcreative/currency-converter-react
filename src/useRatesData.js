
import { useState, useEffect } from 'react';


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        date: null,
        rates: null,
    });
    
    useEffect(() => {
        const ratesApi = (async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();
    
                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            } catch (error) {
                setRatesData({
                    state: "error",
                });
            }
        });
        setTimeout(ratesApi, 1000);
    }, []);
    
    return ratesData;
    
}