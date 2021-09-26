import React from "react";
import LeftSideBar from "./leftsidebar";
import RightSideBar from "./rightsidebar";
//import TopBar from "./topbar";

function Layout() {
  return (
    <>
      <div className="d-flex flex-row justify-content-evenly">
        <LeftSideBar />
        <RightSideBar />
        {/*<TopBar />*/}
      </div>
    </>
  );
}

export default Layout;
