import styled from "styled-components";

export const Table=styled.table`
    border: 2px solid lightblue;
    width: 100%;
    border-collapse: collapse;
`;
export const Thead =styled.thead`
    padding: 5px;
`;
export const Th=styled.th`
    font-weight: bold;
    background-color:lightBlue;
    font-size: 20px;
    height: 1.5rem;
    padding:10px ;
    text-align: left;
    border: 1px solid lightblue;
    border-collapse: collapse;
`;
export const Tr=styled.tr`
    border: none;
    &:nth-child(even) {
    background-color: #f2f2f2;
    }
    &:hover{
        background-color:rgb(220,220,220)
    }
`;
export const Tbody=styled.tbody`
    margin-top: 5px;
    
`;
export const Td=styled.td`
    padding-left: 1rem;
    padding: 10px;
    border: 1px solid lightblue;
    border-collapse: collapse;
`;
