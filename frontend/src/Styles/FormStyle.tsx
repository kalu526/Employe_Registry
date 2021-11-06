import styled from "styled-components";

export const Form=styled.form`
    padding: 10px;
    margin: 0px;
    align-content: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const Input=styled.input`
    padding: 5px;
    margin: 5px;
    border-radius: 3px;
    border: none;
    border-bottom: 2px solid lightblue;
    max-width: 300px;
    align-self: center;
    padding-bottom: 10px;
    &:focus{
        outline: none;
    }
    &:visited{
        border: none;
    }
    
`;

export const Label=styled.label`
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    max-width: 300px;
    align-self: center;
    margin-left: -150px;
    padding: 10px;
`;
export const CloseButton=styled.p`
    width: 10px;
    height: 10px;
    font-size: 20px;
    font-weight: Bolder;
    color: red;
    align-self: flex-end;
    margin-right: 70px;
    &:hover{
        cursor: pointer;
       }
`;
export const SubmitButton=styled.button`
    width:100px;
    height: 40px;
    background-color: #52b5d6;
    color: white;
    border: 3px solid #52b5d6;
    align-self: center;
    border-radius: 5px;
    font-weight: 900;
    margin-top: 10px;
    box-shadow: -10px -10px 15px rgb(247,247,247),
        10px 10px 15px rgb(247,247,247);
    &:active{
        border:none;
    }

    &:hover{
        background-color: rgb(247,247,247);
        border: 3px solid #52b5d6;
        cursor: pointer;
        transform: scale(1.003);
        color:#52b5d6 ;
    }
`;
export const ErrorMessage=styled.label`
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    max-width: 300px;
    align-self: center;
    color: red;
    padding: 10px;
`;
