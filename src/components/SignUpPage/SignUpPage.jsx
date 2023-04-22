import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setMessage("");
    setErrorMessage("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        event.target.reset();
        setMessage("Successfully signed up");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setMessage("");
    setErrorMessage("");

    signInWithPopup(auth, googleProvider)
      .then(() => {
        setMessage("Successfully signed in");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex mx-auto mt-10 lg:mt-24">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl p-5">
              <h1 className="text-center text-2xl font-bold">Please Sign Up</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-control mt-10">
                  <label className="input-group">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="info@site.com"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="form-control mt-5">
                  <label className="input-group">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input input-bordered"
                      required
                    />
                  </label>
                </div>

                <div className="flex">
                  <div className="flex mx-auto">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn rounded mt-7"
                    ></input>
                  </div>
                </div>
              </form>

              <p className="text-center mt-2">
                <small>
                  Already have an account? Please{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </small>
              </p>

              {message && (
                <div className="toast toast-end">
                  <div className="alert alert-success">
                    <div>
                      <span>{message}</span>
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="toast toast-end">
                  <div className="alert alert-error">
                    <div>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-center text-3xl font-semibold mt-10">Or</h1>
              <h1 className="text-center text-xl font-semibold mt-2 mb-2">
                Continue with
              </h1>

              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-ghost text-lg font-bold"
                >
                  Google
                </button>
                <button className="btn btn-ghost text-lg font-bold">
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
