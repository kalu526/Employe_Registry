import {combineReducers} from 'redux'
import empReducer from './empReducer'

const reducers=combineReducers({
    emp:empReducer
})

export default reducers;