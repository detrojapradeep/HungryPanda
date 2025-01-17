import { CART_LOGO_URL } from "../utils/constants";
import { APP_LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

import { Link } from "react-router";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  useEffect(() => {
    console.log("I am use Effect");
  }, [loginBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={APP_LOGO_URL} width={200} alt="Hungry Panda Logo"></img>
        </div>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <div className="shopping-cart-logo">
              <img src={CART_LOGO_URL} alt="Shopping Cart Logo"></img>
            </div>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtn === "Login"
                  ? (setLoginBtn("Logout"), console.log(loginBtn))
                  : (setLoginBtn("Login"), console.log(loginBtn));
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
