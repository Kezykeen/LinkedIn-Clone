import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
