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


import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';
import UserForm from './userForm.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
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
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <div>
                  <p>Hello, {user.email}</p>
                </div>
              : <div>
                  <p>Please sign in.</p>
                </div>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <div>
                  <button onClick={signInWithGoogle}>Sign in with Google</button><br></br>
                  <UserForm onSubmit={signInWithEmailAndPassword} />
                  <p>create user</p>
                  <UserForm onSubmit={createUserWithEmailAndPassword} />
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
