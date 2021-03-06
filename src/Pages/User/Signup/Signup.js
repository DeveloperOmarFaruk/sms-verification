import React, { useContext, useEffect, useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // Registration Function
  const [regState, setRegState] = useState({
    first: "",
    sure: "",
    email: "",
    phone: "",
    birth: "",
    password: "",
    username: "",
    code: "",
  });

  const regHandleChange = (e) => {
    setRegState({ ...regState, [e.target.name]: e.target.value });
  };

  // Login Function
  let navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Register Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="first"
                    value={regState.first}
                    onChange={regHandleChange}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Surename"
                    required
                    name="sure"
                    value={regState.sure}
                    onChange={regHandleChange}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
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

                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fas fa-phone-volume"></i>
                  </span>
                  <input
                    type="number"
                    placeholder="Phone"
                    required
                    name="phone"
                    value={regState.phone}
                    onChange={regHandleChange}
                  />
                </div>

                <div className="select">
                  {" "}
                  {/* <span>
                    <i className="fas fa-venus-mars"></i>
                  </span> */}
                  <select name="gender" className="input_field">
                    <option value="female">Gender</option>
                    <option value="male">Female</option>
                    <option value="other">Male</option>
                  </select>
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i className="far fa-calendar-alt"></i>
                  </span>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    required
                    name="birth"
                    value={regState.birth}
                    onChange={regHandleChange}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    name="username"
                    value={regState.username}
                    onChange={regHandleChange}
                  />
                </div>

                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
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

                <div className="input_field">
                  {" "}
                  <span>
                    <i className="fas fa-qrcode"></i>
                  </span>
                  <input
                    type="number"
                    placeholder="Access code"
                    required
                    name="code"
                    value={regState.code}
                    onChange={regHandleChange}
                  />
                </div>

                <br />
                <input className="button" type="submit" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="credit">
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
