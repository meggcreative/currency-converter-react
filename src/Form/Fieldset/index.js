import { StyledFieldset, Legend } from "../styled.js";

const Fieldset = ({ legendContent, fieldsetBody }) => {
    return (
        <StyledFieldset>
            <Legend>{legendContent}</Legend>
            <p>
                {fieldsetBody}
            </p>
        </StyledFieldset>
    );
};

export default Fieldset;