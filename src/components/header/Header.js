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
          {/* <img
            src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
            alt="linkedIn logo"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            class="global-nav__logo"
          >
            <title>LinkedIn</title>
            <g>
              <path
                d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
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
          <HeaderOption avatar title="Log Out" handleClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
};

export default Header;
