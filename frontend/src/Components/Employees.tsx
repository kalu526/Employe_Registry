import React,{useEffect} from 'react'
import { Container, Span } from '../Styles/CompStyles'
import { Thead,Tbody,Th,Td,Tr, Table } from '../Styles/TableStyles'
import UpdateEmployee from './UpdateEmployee'
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt';
import {Delete} from '@styled-icons/fluentui-system-filled/Delete';
import {connect} from 'react-redux'
import {deleteEmployees,getEmployees,addEmployees} from '../Actions'
import EmployeePropType from './PropTypes/EmployeePropType'

const tableHeader=[
    {id:"name",label:'Name'},
    {id:"Birth Date",label:'Birth Date'},
    {id:"Gender",label:'Gender'},
    {id:"Salary",label:'Salary'},
    {id:"action",label:'Actions'}
]
const  Employees:React.FC<EmployeePropType>=({state,getEmployees,deleteEmployees,addEmployees})=> {
    const [dialogOpener,setDialogOpener]=React.useState(false)
    
    useEffect(()=>{
        getEmployees();
    },[getEmployees])

    const handleClick=()=>{
        setDialogOpener(!dialogOpener);
    }
    
    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        {tableHeader.map((head)=>(
                            <Th key={head.id}>{head.label}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>mike</Td>
                        <Td>1990/10/20</Td>
                        <Td>male</Td>
                        <Td>8000</Td>
                        <Td><Span><EditAlt color='blue' size={20} onClick={()=>handleClick()}/></Span> <Span><Delete color='#ff4e83' size={20}/></Span></Td>
                    </Tr>
                    <Tr>
                        <Td>mike</Td>
                        <Td>1990/10/20</Td>
                        <Td>male</Td>
                        <Td>8000</Td>
                        <Td>!</Td>
                    </Tr>
                    <Tr>
                        <Td>mike</Td>
                        <Td>1990/10/20</Td>
                        <Td>male</Td>
                        <Td>8000</Td>
                        <Td>!</Td>
                    </Tr>
                </Tbody>
            </Table>
            {dialogOpener&&<UpdateEmployee handleClick={handleClick}/>}
        </Container>
    )
}

const mapStateToProps = (state: any) => {
	return {
		emp: state.emp,
	};
};

export default connect(mapStateToProps, {getEmployees,deleteEmployees,addEmployees})(Employees);