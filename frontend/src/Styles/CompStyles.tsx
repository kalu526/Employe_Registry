import styled from "styled-components"

export const Container=styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    align-self: center;
    
`;
export const RowGridContainer=styled.div`
    margin: auto;
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    align-self: center;
    
`;
export const MainTitle=styled.p`
    font-weight: bold;
    text-transform: capitalize;
    font-size: 25px;
    
`;
export const AddButton=styled.button`
    border: 3px solid lightblue;
    background-color: white;
    height: 30px;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: -10px -10px 15px rgb(247,247,247),
        10px 10px 15px rgb(247,247,247);
    &:active{
        border:none;
    }

    &:hover{
        background-color: lightblue;
        border: 3px solid lightblue;
        cursor: pointer;
        transform: scale(1.003);
    }

`;
export const Dialog=styled.div`
    z-index: 100;
    align-self: center;
    position: fixed;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    width: 70vw;
    max-width: 500px;
    border-top-right-radius:30px ;
    border-top-left-radius:30px ;
    height: 90vh;
    text-align: center;
    align-self: center;
    background-color: white;
    box-shadow: 5px 5px 100px rgb(230,230,230);
    
`;
export const EditDialog=styled.div`
    z-index: 100;
    align-self: center;
    position: fixed;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    width: 80vw;
    border-top-right-radius:30px ;
    border-top-left-radius:30px ;
    height: 70vh;
    text-align: center;
    align-self: center;
    background-color: white;
    box-shadow: 5px 5px 100px rgb(230,230,230);
    
`;
export const RowGrids=styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    margin-left: 30px;
    width: 20vw;
`;
export const Span=styled.span`
    
    margin: 0;
    padding: 0;
    padding-left: 10px;
    justify-content: right;
    &:hover{
        cursor: pointer;
        font: bold;
        color: green;
    }
    
`;

