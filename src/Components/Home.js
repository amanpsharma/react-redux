import React from 'react'
import { connect } from 'react-redux';
import {changestate} from './store/action/action'
function Home(props) {
    const  _changeData = () =>{
        props.changeReducer()
    }   
    return (
        <div style={{backgroundColor:props.user.color}}>
            <h1>{props.user.name}</h1>
            <h1>{props.user.userName}</h1>
            <button onClick={ _changeData}>Click Me</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return({
        user : state.rootReducer
    })
}
const mapDispatchToProps = (dispatch)=>{
    return({
        changeReducer :(userName)=>{
            dispatch(changestate)
        }
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)