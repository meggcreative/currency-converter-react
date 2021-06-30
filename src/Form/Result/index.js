import {StyledContener} from "../styled.js";

const Result = ({ result }) => {
    return (
        <StyledContener>
            {result !== undefined && (
                <>
                    {result.givenAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </StyledContener>
    )
};



export default Result;