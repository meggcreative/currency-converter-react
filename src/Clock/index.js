import {useCurrentDate} from "./useCurrentDate.js";
import {StyledContainer} from "./styled.js";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledContainer>
            Dzisiaj jest:
            {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long"

            })}
        </StyledContainer>
    )
}


export default Clock;