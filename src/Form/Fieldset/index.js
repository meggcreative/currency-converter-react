const Fieldset = ({legendContent, fieldsetBody}) => {
    return (
        <fieldset className="form__fieldset">
            <legend className="form__legend">{legendContent}</legend>
            <p>
                {fieldsetBody}
            </p>
        </fieldset>
    );
};

export default Fieldset;