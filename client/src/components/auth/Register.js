import React, { useState } from "react";
import Base from "../auth/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
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

  const signUpForm = () => {
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
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <form>
              <div className="form-group">
                <label className="text-light">Name</label>
                <input
                  className="form-control"
                  onChange={handleChange("name")}
                  type="text"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label className="text-light">Email</label>
                <input
                  className="form-control"
                  onChange={handleChange("email")}
                  type="email"
                  value={email}
                />
              </div>

              <div className="form-group">
                <label className="text-light">Password</label>
                <input
                  onChange={handleChange("password")}
                  className="form-control"
                  type="password"
                  value={password}
                />
              </div>
              <button onClick={onSubmit} className="btn btn-success btn-block">
                Submit
              </button>
            </form>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
      </div>
    );
  };

  const successMessage = () => {
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
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              <h4>New account was created successfully. Please</h4>
              <Link to="/login">Login Here</Link>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
      </div>
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
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
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
            <b>Register</b> below
          </h1>
        }
        description={
          <div>
            <h4>
              Already have an account? <Link to="/login">Log in</Link>
            </h4>
          </div>
        }
      >
        {homeButton()}
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
      </Base>
      <div className="body">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </div>
    </div>
  );
};

export default Register;
