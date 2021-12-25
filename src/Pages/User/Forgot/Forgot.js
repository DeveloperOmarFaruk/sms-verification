import React, { useState } from "react";
import "../Signup/Signup.scss";
import ReCAPTCHA from "react-google-recaptcha";

const Forgot = () => {
  // Forgat Email function
  const [forgotState, setForgotState] = useState({
    email: "",
  });

  const forgotHandleChange = (e) => {
    setForgotState({ ...forgotState, [e.target.name]: e.target.value });
  };

  // ReCAPTCHA Function
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Request password reset</h2>
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
                    value={forgotState.email}
                    onChange={forgotHandleChange}
                  />
                </div>
                <div class="row clearfix">
                  <ReCAPTCHA
                    sitekey="6LdsPFYdAAAAAC-jwLakqG1w8IZzJumZ0N9pmBu1"
                    onChange={onChange}
                  />
                </div>
                <br />
                <input class="button" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
