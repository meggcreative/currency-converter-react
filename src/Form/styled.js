import styled from "styled-components";
import LoadingImage from "../images/loading.gif";

export const StyledFieldset = styled.fieldset`
    padding: 20px;
    margin: 20px auto;
    border: 5px solid ${({ theme }) => theme.color.bayLeaf};
    border-radius: 10%;
    background-color:${({ theme }) => theme.color.cello} ;
    position: relative;
    box-shadow: 5px -15px 70px 42px #65858E;
    color: rgb(188, 209, 212);
    font-size: 20px;
    max-width: 500px;
`
export const Select = styled.select`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 5px;
    max-width: 250px;
    width: 100%;
    border-radius: 3%;
    font-size: 20px;
    background-color: rgb(221, 240, 236);
`
export const Button = styled.button`
    margin: 15px auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.bayLeaf};
    width: 100%;
    border: 6px solid ${({ theme }) => theme.color.cello};
    border-radius: 5%;
    font-size: 20px;
    color: rgb(48, 46, 46);
    font-weight: bold;

    &:active {
        background-color: rgb(63, 129, 82);
    }
`
export const Legend = styled.legend`
    border: 3px solid ${({ theme }) => theme.color.bayLeaf};
    padding: 10px;
    font-size: 15px;
    background-color: rgb(196, 203, 207);
    color: rgb(44, 43, 43);
    font-weight: bold;
`

export const StyledContener = styled.p`
    padding: 10px;
    margin: 10px auto;
    border: 5px solid ${({ theme }) => theme.color.bayLeaf};
    border-radius: 10%;
    background-color: ${({ theme }) => theme.color.cello};
    position: relative;
    color: rgb(188, 209, 212);
    font-size: 25px;
    max-width: auto;
`
export const Loading = styled.p`
    color: ${({theme}) => theme.color.parisWhite};
`
export const Failure = styled.p`
    color: ${({theme}) => theme.color.crimson};
`
export const StyledImage = styled.img.attrs({
    src: LoadingImage,
})`
        width: 200px;
        margin-left: 100px;
        ;
`