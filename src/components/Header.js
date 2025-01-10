import { CART_LOGO_URL } from "../utils/constants";
import { APP_LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={APP_LOGO_URL} width={200} alt="Hungry Panda Logo"></img>
        </div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
