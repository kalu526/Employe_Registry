import {Datum, ForEmployee} from './StoreTypes'

//For Action Creator
export interface getEmployeeActions{
    type:'GET_EMPLOYEES';
}
export interface addEmployeeActions{
    type:'ADD_EMPLOYEES';
    payload:Datum;
}
export interface deleteEmployeeActions{
    type:'DELETE_EMPLOYEES';
    id:string;
}
export interface updateEmployeeActions{
    type:'UPDATE_EMPLOYEES';
    id:string;
    payload:Datum;
}


//For Reducer
export interface gotEmployeeActions{
    type:'GOT_EMPLOYEES';
    payload:ForEmployee;
}
export interface addedEmployeeActions{
    type:'ADDED_EMPLOYEES';
    payload:Datum;
}
export interface deletedEmployeeActions{
    type:'DELETED_EMPLOYEES';
    id:string;
}
export interface updatedEmployeeActions{
    type:'UPDATED_EMPLOYEES';
    id:string;
    payload:Datum;
}


export const ActionTypeConstants={
    ADD_NEW_EMPLOYEE:'ADD_EMPLOYEES',
    DELETE_EMPLOYEE:'DELETE_EMPLOYEES',
    GET_ALL_EMPLOYEE:'GET_EMPLOYEES',
    UPDATE_EMPLOYEE:'UPDATE_EMPLOYEES'
}
