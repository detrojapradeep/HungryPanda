import { CART_LOGO_URL } from "../utils/constants";
import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
