import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
} from '../../Types/ActionCreatorTypes'

interface EmployeePropType{
    state?:{
        employees:any;
    }
    getEmployees:getEmployeeActionCreator;
    deleteEmployees:deleteEmployeeActionCreator;
    updateEmployees?:updateEmployeeActionCreator;
    addEmployees:addEmployeeActionCreator;
}

export default EmployeePropType;