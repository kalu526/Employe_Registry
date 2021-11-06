import {gotEmployeeActions,
    addedEmployeeActions,
    updatedEmployeeActions,
    deletedEmployeeActions
} from '../Types/ActionTypeConstants'
import {ForEmployee} from '../Types/StoreTypes'


type actions=
        |gotEmployeeActions
        |addedEmployeeActions
        |updatedEmployeeActions
        |deletedEmployeeActions

const intialState:ForEmployee[]=[]

const empReducer=(state=intialState,action:actions)=> {
    console.log('hi miki i am here',action)
    switch(action.type)
    {
        case 'ADDED_EMPLOYEES':
            return {
                ...state,
                employees:action.payload
            }
        case 'GOT_EMPLOYEES':
           
            return {
                ...state,
                status:action.payload.status,
                data:action.payload               
            }
        case 'DELETED_EMPLOYEES':
            return state
        case 'UPDATED_EMPLOYEES':
            return {
                ...state,
                employees:action.payload
            }
        default:
            return state;
    }
}

export default empReducer
