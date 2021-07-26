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
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" onClick={logoutOfApp} />
          <HeaderOption Icon={SupervisorAccount} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar title="Me" handleClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
};

export default Header;
