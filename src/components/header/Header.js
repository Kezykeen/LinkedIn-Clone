import {
  BusinessCenter,
  Chat,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import React from "react";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="linkedIn logo"
          />
          <div className="header_search">
            <Search />
            <input type="text" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccount} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption
            avatar="https:///compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
            title="Me"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
