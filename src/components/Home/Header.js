import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { auth } from "../../firebase";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="Logo"
        />
      </Link>

      {/* Airbnb-like segmented search bar */}
      <div className="header__center">
        <div className="header__search">
          <div className="header__searchSegment">
            <input type="text" placeholder="Anywhere" className="header__input" />
          </div>
          <div className="header__searchSegment">
            <input type="text" placeholder="Any week" className="header__input" />
          </div>
          <div className="header__searchSegment header__searchSegment--last">
            <input type="text" placeholder="Add guests" className="header__input" />
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
      </div>

      <div className="header__right">
        <p className="header__rightText">Become a Host</p>
        <LanguageIcon className="header__rightIcon" />
        <ExpandMoreIcon className="header__rightIcon" />
        <Link to={user ? "/logout" : "/login"} className="header__loginLink">
          <Avatar />
        </Link>
      </div>
    </div>
  );
}

export default Header;
