import React, { useState } from "react";
import "../Signup/Signup.scss";

const ResetPassword = () => {
  // Reset Password Function
  const [newPasswordState, setNewPasswordState] = useState({
    newEmail: "",
    newPassword: "",
    confirmPassword: "",
  });

  const newPsswordHandleChange = (e) => {
    setNewPasswordState({
      ...newPasswordState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Reset Password</h2>
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
                    name="newEmail"
                    value={newPasswordState.newEmail}
                    onChange={newPsswordHandleChange}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    name="newPassword"
                    value={newPasswordState.newPassword}
                    onChange={newPsswordHandleChange}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={newPasswordState.confirmPassword}
                    onChange={newPsswordHandleChange}
                  />
                </div>

                <br />
                <input class="button" type="submit" value="Reset" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
