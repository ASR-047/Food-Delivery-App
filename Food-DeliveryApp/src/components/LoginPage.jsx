import { useRef, useState } from "react";
import "../Styles/log-in-out.css";
import { validateForm } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const phnRef = useRef(null);
  //   const nameRef = useRef("");

  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handlesubmitBtn = () => {
    const message = validateForm(emailRef.current.value, passRef.current.value);
    setErrorMessage(message);

    if (message) return; //if there is error simply return from here

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
           console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }

    
  };
  return (
    <div className="mainContainer">
      <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
        <h1> {isSignInForm ? "Login" : "Sign Up"}</h1>
        {isSignInForm ? (
          <>
            <input ref={emailRef} id="email" type="text" placeholder="email" />
            <input
              ref={passRef}
              id="pass"
              type="password"
              placeholder="password"
            />{" "}
          </>
        ) : (
          <>
            <input id="name" type="text" placeholder="Name" />
            <input
              ref={phnRef}
              id="phone"
              type="number"
              placeholder="Phone Number"
            />
            <input ref={emailRef} id="email" type="text" placeholder="email" />
            <input
              ref={passRef}
              id="pass"
              type="password"
              placeholder="password"
            />
          </>
        )}
        <p id="errorMsg">{errorMessage}</p>
        <button id="submitBtn" onClick={handlesubmitBtn}>
          {isSignInForm ? "Login" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p>
            New to Netflix ?
            <span id="signupText" onClick={toggleSignupForm}>
              SignUp
            </span>{" "}
          </p>
        ) : (
          <p>
            Already Registerd?
            <span id="signupText" onClick={toggleSignupForm}>
              Login
            </span>{" "}
          </p>
        )}
        {isSignInForm && (
          <p>
            By clicking on Login, I accept the Terms & Conditions & Privacy
            Policy
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
