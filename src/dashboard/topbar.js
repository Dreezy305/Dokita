import React from "react";

function TopBar() {
  const TopSection = () => {
    return (
      <>
        <div className="card w-75 h-25 mx-auto mt-5">
          <h1>Top bar here</h1>
        </div>
      </>
    );
  };

  const BottomSection = () => {
    return (
      <>
        <div className="card w-75">
          <h1>Bottom section</h1>
        </div>
      </>
    );
  };
  return (
    <div className="d-flex flex-row w-100 topbar">
      <TopSection />
      {/*<BottomSection />*/}
    </div>
  );
}

export default TopBar;
