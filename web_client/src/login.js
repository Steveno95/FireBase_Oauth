import React, { Component } from 'react';

import './App.css';
import UserForm from './userForm.js';
import { NavLink } from 'react-router-dom';



class Login extends Component {
  render() {
    const {
      signInWithGoogle,
      signInWithEmailAndPassword,
    } = this.props;

    return (
      <div className="App">
        <p>Please Log In.</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button><br></br>
        <UserForm onSubmit={signInWithEmailAndPassword} /><br></br>
        <button><NavLink exact to='/signUp'>Sign Up</NavLink></button><br></br>
      </div>
    );
  }
}

export default Login;

