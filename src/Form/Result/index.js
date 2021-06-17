const Result = ({result} ) => {
    return(
        <p className="form__converter">
            {result !== undefined && (
                <>
                {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}    
                </strong>
                </>
            )}
        </p>
    )
};



export default Result;