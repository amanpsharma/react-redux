
const INITIAL_STATE ={
    userName: 'SHARMA',
    name:'NITISH',
    color:'red'
}
export default (state = INITIAL_STATE,action)=>{
    console.log(action.type)
    switch(action.type){
        case 'CHANGENAME':
            return({
                ...state,
                userName: action.payload
            })
        default:
            return state
    }
}