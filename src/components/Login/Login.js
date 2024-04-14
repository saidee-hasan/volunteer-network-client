import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "./firebaseConfig";
import { UserContaxt } from "../../App";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/register";
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const cl = result.user;
        const { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photoURL };
        console.log(cl);
        setLoggedInUser(signInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);

        // ...
      });
  };
  return (
    <div className="login">
      <button className=" login-btn" onClick={handleGoogleSignIn}>
      <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> Continue with Google
      
      </button><br />
      <small>Don’t have an account? <span style={{color:'#007300'}}>Create an account</span> </small>
      <p>{loggedInUser.name}</p>
      <img src={loggedInUser.photoURL} alt="" />
    </div>
  );
};

export default Login;
