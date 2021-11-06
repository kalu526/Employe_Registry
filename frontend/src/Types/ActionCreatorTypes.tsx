import {getEmployeeActions,
        deleteEmployeeActions,
        updateEmployeeActions,
        addEmployeeActions } from './ActionTypeConstants'

export type getEmployeeActionCreator = () => getEmployeeActions;

export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeActions;
        
export type updateEmployeeActionCreator = (id: string,payload:any) => updateEmployeeActions;
        
export type addEmployeeActionCreator = (payload: any) => addEmployeeActions;
   