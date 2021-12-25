import React from "react";
import "../Signup/Signup.scss";

const ForgotConfirmation = () => {
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Reset Password</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <p style={{ textAlign: "center", fontSize: "8rem" }}>
                <i className="fas fa-envelope-open-text"></i>
              </p>
              <br />
              <p style={{ textAlign: "center" }}>
                To reset your password, please follow the instructions emailed
                to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotConfirmation;
