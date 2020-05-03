import React, { useState } from "react";
import Base from "../auth/Base";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { signin, authenticate } from "../auth/helper";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const homeButton = () => {
    return (
      <div className="html">
        <div className="head">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </div>
        <div className="body">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      return (
        <div className="html">
          <div className="head">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            ></link>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
          </div>
          <div className="body">
            <Redirect to="/profile" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          </div>
        </div>
      );
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="html">
        <div className="head">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="html">
        <div className="head">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                <div className="form-group">
                  <label className="text-light">Email</label>
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    className="form-control"
                    type="email"
                  />
                </div>

                <div className="form-group">
                  <label className="text-light">Password</label>
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    className="form-control"
                    type="password"
                  />
                </div>
                <button
                  onClick={onSubmit}
                  className="btn btn-success btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
      </div>
    );
  };

  return (
    <div
      className="html"
      style={{
        marginLeft: "20%",
        marginRight: "20%",
        lineHeight: "1rem",
      }}
    >
      <div className="head">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </div>
      <Base
        title={
          <h1>
            <b>Login</b> below
          </h1>
        }
        description={
          <div>
            <h4>
              Don't have an account? <Link to="/register">Register</Link>
            </h4>
          </div>
        }
      >
        {homeButton()}
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
      </Base>
      <div className="body">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </div>
    </div>
  );
};

export default Login;
