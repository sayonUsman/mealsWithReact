import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/ContextProvider";

const LoginPage = () => {
  const { loginWithEmailAndPassword, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setMessage("");
    setErrorMessage("");

    loginWithEmailAndPassword(email, password)
      .then(() => {
        event.target.reset();
        setMessage("Successfully signed in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setMessage("");
    setErrorMessage("");

    loginWithGoogle()
      .then(() => {
        setMessage("Successfully signed in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGithubLogin = () => {
    setMessage("");
    setErrorMessage("");

    loginWithGithub()
      .then(() => {
        setMessage("Successfully signed in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex mx-auto mt-36 lg:mt-48">
          <div>
            <div className="card rounded-lg w-96 bg-base-100 shadow-md shadow-zinc-800 p-5">
              <h1 className="text-center text-2xl font-bold">Please Login</h1>

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
                      value="Login"
                      className="btn rounded mt-7"
                    ></input>
                  </div>
                </div>
              </form>

              <p className="text-center mt-2">
                <small>
                  New to this website!!! Please{" "}
                  <Link to="/signUp" className="text-primary">
                    Sign Up
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
                  className="btn btn-ghost text-lg font-semibold"
                >
                  Google
                </button>

                <button
                  onClick={handleGithubLogin}
                  className="btn btn-ghost text-lg font-semibold"
                >
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

export default LoginPage;
