import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, handleClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={handleClick}>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
