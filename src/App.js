import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { changeNameAction } from './actions/myAction'

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <h2>My name is {props.myName} </h2>
      <button onClick={()=>{props.changeName()}}>Change Name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: ()=>{dispatch(changeNameAction())}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
