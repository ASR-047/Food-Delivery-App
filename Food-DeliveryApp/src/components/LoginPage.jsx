import { useState } from "react";
import "../Styles/log-in-out.css";
const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="mainContainer">
      <form className="formContainer">
        <h1> {isSignInForm ? "Login" : "Sign Up"}</h1>
        {isSignInForm ? (
          <>
            <input id="email" type="text" placeholder="email" />
            <input id="pass" type="password" placeholder="password" />{" "}
          </>
        ) : (
          <>
            <input id="name" type="text" placeholder="Name" />
            <input id="phone" type="number" placeholder="Phone Number" />
            <input id="email" type="text" placeholder="email" />
          </>
        )}

        <button id="submitBtn" onClick={(e) => e.preventDefault()}>
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
        {isSignInForm && <p>
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>}
      </form>
    </div>
  );
};

export default LoginPage;
