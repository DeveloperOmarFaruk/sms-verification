import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="#" className="nav-logo">
            Company Logo
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              ></NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Product
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/members"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Members
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/friends"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Friends
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/payment"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Payment
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/survey"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Survey
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Log in
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
