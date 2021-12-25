import React, { useContext, useEffect, useState } from "react";
import "./Signup.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // Registration Function
  const [regState, setRegState] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const regHandleChange = (e) => {
    setRegState({ ...regState, [e.target.name]: e.target.value });
  };

  // ReCAPTCHA Function
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // Login Function
  let navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Register Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={regState.email}
                    onChange={regHandleChange}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={regState.password}
                    onChange={regHandleChange}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Re Password"
                    required
                    name="rePassword"
                    value={regState.rePassword}
                    onChange={regHandleChange}
                  />
                </div>
                <div class="row clearfix">
                  <ReCAPTCHA
                    sitekey="6LdsPFYdAAAAAC-jwLakqG1w8IZzJumZ0N9pmBu1"
                    onChange={onChange}
                  />
                </div>
                <br />
                <input class="button" type="submit" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p class="credit">
        {" "}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClick}
          target="_blank"
        >
          Already have account?
        </p>
      </p>
    </>
  );
};

export default Signup;
