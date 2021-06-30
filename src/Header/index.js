import {StyledHeader} from "./styled.js";

const Header = (props) => (
    <StyledHeader>
        {props.title}
    </StyledHeader>
);

export default Header;