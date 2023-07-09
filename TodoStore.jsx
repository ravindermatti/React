import {combineReducers,createStore} from 'redux'
import { TodoReducer } from './TodoReducer'



const allReducers =combineReducers({
    todo:TodoReducer

})


export const myStore1 =createStore(allReducers);