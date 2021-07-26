import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {newsArticle("We're making moves", "Crazy news - 342 readers")}
      {newsArticle("LinkedIn is going global", "Recent news - 1274 readers")}
      {newsArticle("LinkedIn is in Africa", "Top news - 15739 readers")}
    </div>
  );
};

export default Widgets;
