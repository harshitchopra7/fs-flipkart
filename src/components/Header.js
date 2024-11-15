import "./Header.css";

import Search from "../icons/Search";

const Header = () => {
  return (
    <div className="header-container">
      {/* left  */}
      <div className="header-left">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk_logo_plus_mobile-f60446.svg"
          alt="logo"
          className="header-logo"
        />

        <div className="header-input-container">
          <Search />
          <input placeholder="Search for Products" className="header-input" />
        </div>
      </div>

      {/* right */}
      <div className="header-right">
        <div className="header-right-element">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" />
          <p>Hi, Harshit!</p>
        </div>

        <div className="header-right-element">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" />
          <p>Cart</p>
        </div>

        <div className="header-right-element">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" />
          <p>Become a Seller</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
