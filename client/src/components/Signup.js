import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { showLoading } from "../helpers/loading";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: true,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  //event handler

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
      successMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...FormData,
        errorMsg: "Paswordsdo not match",
      });
    } else {
      setFormData({
        ...formData,
        successMsg: "Validation successful",
      });
    }
  };

  //views
  const showSignupForm = () => {
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        {/*username*/}

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
          </div>

          <input
            name="username"
            value={username}
            className="form-control"
            placeholder="Username"
            type="text"
            onChange={handleChange}
          />
        </div>
        {/*email*/}

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>
          </div>

          <input
            name="email"
            value={email}
            className="form-control"
            placeholder="Email address"
            type="email"
            onChange={handleChange}
          />
        </div>
        {/*password*/}

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
          </div>

          <input
            name="password"
            value={password}
            className="form-control"
            placeholder="Create password"
            type="password"
            onChange={handleChange}
          />
        </div>
        {/*password2*/}

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
          </div>

          <input
            name="password2"
            value={password2}
            className="form-control"
            placeholder="Confirm password"
            type="password"
            onChange={handleChange}
          />
        </div>
        {/*signup button */}

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
        {/*already have account */}
        <p className="text-center text-black">
          Have an account? <Link to="/signin">Log In</Link>
        </p>
      </form>
    );
  };
  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {showSignupForm()}
        </div>
      </div>
    </div>
  );
};

export default Signup;
