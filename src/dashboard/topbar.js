import React from "react";
import Dp from "../assets/team/dp.png";

function TopBar() {
  const TopSection = () => {
    return (
      <>
        <div
          className="card mx-auto mt-5 mb-5 me-5 topsection"
          style={{ width: "90%", borderRadius: "20px" }}
        >
          <div className="d-flex flex-row">
            {/* 1st width */}
            <div className="" style={{ width: "370px" }}>
              <div
                className="container pt-3 px-3"
                style={{ background: "#EEEEEE", borderRadius: "20px" }}
              >
                <div className="row mb-4">
                  <div className="col-sm-4">
                    <img src={Dp} className="" alt="display_ptr" />
                  </div>
                  <div className="col-sm-5 justify-content-center">
                    <h5>Jacobs Taylor</h5>
                    <p>28 years</p>
                  </div>
                </div>
                {/* row 2 */}
                <div className="row">
                  <div className="col-sm-3 ">
                    <h6>Height</h6>
                    <h6>5 7''</h6>
                  </div>
                  <div className="col-sm-3">
                    <h6>Weight</h6>
                    <h6>98kg</h6>
                  </div>
                  <div className="col-sm-4">
                    <h6>Blood Type</h6>
                    <h6>AB -ve</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd width */}
            <div className="w-50">
              <div className="container pt-3 px-4">
                {/* 1st row */}
                <div className="row mb-3">
                  <div className="col-sm-5">
                    <h6>Phone Number</h6>
                    <p>0998345884</p>
                  </div>
                  <div className="col-sm-7">
                    <h6>Email</h6>
                    <p>jacobstobi@gmail.com</p>
                  </div>
                </div>
                {/* 2nd width */}
                <div className="row mt-3">
                  <div className="col-sm-5">
                    <h6>Card Number</h6>
                    <p>23124900</p>
                  </div>
                  <div className="col-sm-7">
                    <h6>Medical Condition</h6>
                    <p>Alergies, Astma </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const BottomSection = () => {
    return (
      <>
        <div
          className="card  mx-auto mt-1 bottomsection"
          style={{ width: "90%" }}
        >
          <div className="d-flex flex-row">Bottom section</div>
        </div>
      </>
    );
  };
  return (
    <div className="w-75 topbar ">
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default TopBar;
