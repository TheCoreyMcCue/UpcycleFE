import React from "react";
import "./Header.css";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logos/UpcycleSkate-logos_white.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" alt="Upcycle Skate logo" src={logo} />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SkateboardingIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Dashboard</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
