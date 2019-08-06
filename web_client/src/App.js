// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from './firebaseConfig.js'
// import UserForm from './userForm.js';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const FormWrapper = ({ children }) =>
//   <React.Fragment>
//     {children}
//     <hr />
//   </React.Fragment>;

// const App = ({
//   user,
//   error,
//   setError,
//   signOut,
//   signInWithEmailAndPassword,
//   signInWithGoogle,
//   createUserWithEmailAndPassword,
// }) => (
//   <React.Fragment>
//     <FormWrapper>
//       <h1>create user</h1>
//       <UserForm onSubmit={createUserWithEmailAndPassword} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in</h1>
//       <UserForm onSubmit={signInWithEmailAndPassword} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign in with google</h1>
//       <button onClick={signInWithGoogle}>sign in with google</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>sign out</h1>
//       <button onClick={signOut}>sign out</button>
//     </FormWrapper>

//     <FormWrapper>
//       <h1>user data</h1>
//       <textarea value={JSON.stringify(user)} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>error data</h1>
//       <textarea value={JSON.stringify(error)} />
//     </FormWrapper>

//     <FormWrapper>
//       <h1>clear error</h1>
//       <button onClick={() => setError(null)}>clear error</button>
//     </FormWrapper>
//   </React.Fragment>
// );

// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);


import React, { Component, history } from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
// import logo from './logo.svg';
import './App.css';
import UserForm from './userForm.js';
// import Login from './login.js';
// import SignUp from './signUp.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      modalShow: false,
    }
  }

  handleClose() {
    this.setState({ modalShow: false });
  }

  handleShow() {
    this.setState({ modalShow: true });
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {
            user
              ? <div>
                  <p>Hello, {user.email}</p>
                </div>
              : <div>
                  <p>Please Log In.</p>
                </div>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <div>
                  <button onClick={signInWithGoogle}>Sign in with Google</button><br></br>
                  <UserForm onSubmit={signInWithEmailAndPassword} /><br></br>
                  <button onClick={this.handleShow}>Sign Up</button>
                  <Modal show={this.state.modalShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Enter Email and Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <UserForm onSubmit={createUserWithEmailAndPassword} />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
