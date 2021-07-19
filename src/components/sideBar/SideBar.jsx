import React from "react";
import "./SideBar.css";

const SideBar = () => {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          className="sidebar_header_logo"
          src="https://images.unsplash.com/photo-1625753216724-552b406332e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
          alt="splash gradrient background logo"
        />

        <img
          className="sidebar_avatar"
          src="https:///compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
          alt=""
        />
        <h2>Okoro Kingsley</h2>
        <h4>Okorokingsley250@gmail.com</h4>
      </div>

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
  );
};

export default SideBar;
