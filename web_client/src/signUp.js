import React, { Component } from 'react';

import './App.css';
import UserForm from './userForm.js';
import { NavLink } from 'react-router-dom';



class SignUp extends Component {
  render() {
    const {
        createUserWithEmailAndPassword
    } = this.props;

    return (
      <div className="App">
        <p>Enter Email and Password</p>
        <UserForm onSubmit={createUserWithEmailAndPassword} /><br></br>
      </div>
    );
  }
}

export default SignUp;