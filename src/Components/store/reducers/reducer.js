import {ChangenameAction} from '../action/action'
const INITIAL_STATE ={
    userName: 'SHARMA',
    name:'NITISH',
    color:'red'
}
export default (state = INITIAL_STATE,action)=>{
    console.log(ChangenameAction)
    switch(action.type){
        case ChangenameAction.ChangenameAction:
            return({
                ...state
                
            })
        default:
            return state
    }
}