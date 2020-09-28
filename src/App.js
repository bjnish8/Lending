import React from "react";
import BaseRouter from "./routes";
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="App">
      <BaseRouter {...props}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
      isAuthenticated: state.user && Object.keys(state.user).length > 0,
  }
}


const mapDispatchToProps = dispatch => {
  return {
      onTrySignIn: () => dispatch(() => {})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

