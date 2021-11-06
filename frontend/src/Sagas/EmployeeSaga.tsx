import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects'
import { 
        gotEmployeeActions,
        deletedEmployeeActions,
        updatedEmployeeActions,
        addedEmployeeActions,
    
    ActionTypeConstants,
    deleteEmployeeActions,
    updateEmployeeActions,
    addEmployeeActions } from '../Types/ActionTypeConstants'
import axiosApi from '../Api/axiosAPi'
import { AxiosResponse } from 'axios';
//Watchers
function* EmployeeSaga():Generator<StrictEffect>{
    yield takeEvery(ActionTypeConstants.GET_ALL_EMPLOYEE,getAllEmployees);
    yield takeEvery(ActionTypeConstants.DELETE_EMPLOYEE,deleteEmployees);
    yield takeEvery(ActionTypeConstants.UPDATE_EMPLOYEE,updateEmployees);
    yield takeEvery(ActionTypeConstants.ADD_NEW_EMPLOYEE,addEmployees);
}

//Workers
function* getAllEmployees(){
    try{
        const res:AxiosResponse<any> = yield call(axiosApi.get,'/')
        
        switch(res.status)
        {
            case 200:
                const data:gotEmployeeActions={
                    type:'GOT_EMPLOYEES',
                    payload: res.data
                }
                console.log('this is before putting the data',data)
                put(data);
               

        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* addEmployees({payload}:addEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,'/',payload)
        const resp:AxiosResponse=yield call(axiosApi.get,'/')
        console.log('this is the data to be posted',resp.data)
        switch(res.status)
        {
            case 201:
                console.log('this is the data to be added tooo to db',payload)
                const data:addedEmployeeActions={
                    type:'ADDED_EMPLOYEES',
                    payload
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* deleteEmployees({id}:deleteEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,'/',{
            id:id
        })
        switch(res.status)
        {
            case 200:
                const data:deletedEmployeeActions={
                    type:'DELETED_EMPLOYEES',
                    id,
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* updateEmployees({id,payload}:updateEmployeeActions){
    try{
        const res:AxiosResponse<any> = yield call(axiosApi.post,`/${id}`,{
            payload:payload
        })
        switch(res.status)
        {
            case 200:
                const data:updatedEmployeeActions={
                    type:'UPDATED_EMPLOYEES',
                    id,
                    payload:res.data
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}

export default EmployeeSaga