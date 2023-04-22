import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const SignUpPage = () => {
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

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="h-96 flex justify-center items-center mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
