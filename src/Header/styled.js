import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 20px;
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    font-size: 40px;
    color: ${({ theme }) => theme.color.donJuan};
    font-weight: bold;
`