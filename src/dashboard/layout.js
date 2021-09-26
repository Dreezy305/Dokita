import React from "react";
import LeftSideBar from "./leftsidebar";
import RightSideBar from "./rightsidebar";
import TopBar from "./topbar";

function Layout() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <LeftSideBar />
        <TopBar />
        <RightSideBar />
      </div>
    </>
  );
}

export default Layout;
