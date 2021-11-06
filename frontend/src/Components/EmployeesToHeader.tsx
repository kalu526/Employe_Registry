import React from "react";
import { Container,MainTitle,AddButton, RowGridContainer} from '../Styles/CompStyles';
import AddEmployee from './AddEmployee';


function EmployeesToHeader() {
    const [dialogOpener,setDialogOpener]=React.useState(false)
    const handleClick=()=>{
        setDialogOpener(!dialogOpener);
    }
    return (
        
            <Container>
                <RowGridContainer>
                    <MainTitle>Employees List</MainTitle>
                    <AddButton onClick={()=>setDialogOpener(!dialogOpener)}>Add Employee</AddButton>
                </RowGridContainer>
                {dialogOpener&&<AddEmployee handleClick={handleClick}/>}
            </Container>
            
          
        
    )
}

export default EmployeesToHeader
