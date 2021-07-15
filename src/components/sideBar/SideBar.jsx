import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";

const SideBar = () => {
  const recentItem = (topic) => {
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo_1579546929518-9e396f3cc809?ixlib_rb-1.2.1&ixid=MXwxMjA3fD88MHxleHBsb33lLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt="splash gradrient background logo"
        />
        <Avatar className="sidebar-avatar" />
        <h2>Okoro Kingsley</h2>
        <h4>Okorokingsley250@gmail.com</h4>

        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you?</p>
            <p className="sidebar_statNumber">2,543</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">2,448</p>
          </div>
        </div>

        <div className="sidebar_bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
