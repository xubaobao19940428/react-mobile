//包含n个reducer函数的模块
import {ADDNAME, ADDAGE} from '../actions/actionType'
import {combineReducers} from 'redux'
function addName(state='initRedux',action){ //形参默认值
    switch(action.type){
        case ADDNAME:
            return action.data
        default:
            return state
    }
}
function addAge(state=0,action){
    switch(action.type){
        case ADDAGE:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName,addAge
})