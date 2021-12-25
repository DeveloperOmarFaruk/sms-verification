import React from "react";
import { useNavigate } from "react-router-dom";

const ResetConfirmations = () => {
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
            <h2>Reset Password</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <p style={{ textAlign: "center", fontSize: "8rem" }}>
                <i className="fas fa-envelope-open-text"></i>
              </p>
              <br />
              <p style={{ textAlign: "center" }}>
                Your password has been reset.
                <br />
                Please{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "#f5ba1a",
                    textDecoration: "underline",
                  }}
                  onClick={handleClick}
                >
                  Click here to Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetConfirmations;
