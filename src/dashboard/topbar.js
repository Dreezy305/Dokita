import React from "react";
import Dp from "../assets/team/dp.png";
import Ellipse15 from "../assets/dashboard/Ellipse-15.png";
import Ellipse16 from "../assets/dashboard/Ellipse-16.png";
import Ellipse17 from "../assets/dashboard/Ellipse-17.png";
import Ellipse18 from "../assets/dashboard/Ellipse-18.png";
import Ellipse19 from "../assets/dashboard/Ellipse-19.png";
import Ellipse20 from "../assets/dashboard/Ellipse-20.png";

const doctors = [
  { id: 1, image: Ellipse15, name: "Kemi Johnson", role: "Consultant" },
  { id: 2, image: Ellipse16, name: "Abu Thomas", role: "Cardiologist" },
  { id: 3, image: Ellipse17, name: "Joseph Obinna", role: "Consultant" },
  { id: 4, image: Ellipse18, name: "Busola Amadu", role: "Ophtalmologist" },
  { id: 5, image: Ellipse19, name: "Henny Basil", role: "Consultant" },
  { id: 6, image: Ellipse20, name: "Daves Yahaya", role: "Dentist" },
  { id: 6, image: Ellipse20, name: "Daves Yahaya", role: "Dentist" },
  { id: 6, image: Ellipse20, name: "Daves Yahaya", role: "Dentist" },
];

function TopBar() {
  const TopSection = () => {
    return (
      <>
        <div
          className="card mx-auto mt-2 mb-2 me-5 topsection"
          style={{
            width: "90%",
            borderRadius: "20px",
            border: "1px solid rgba(51, 45, 160, 0.2)",
          }}
        >
          <div className="d-flex flex-row">
            {/* 1st width */}
            <div className="" style={{ width: "370px" }}>
              <div
                className="container pt-3 px-3"
                style={{ background: "#EEEEEE", borderRadius: "20px" }}
              >
                <div className="row mb-4 ">
                  <div className="col-sm-4">
                    <img src={Dp} className="" alt="display_ptr" />
                  </div>
                  <div className="col-sm-6 justify-content-center">
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
          className="card  mx-auto mt-3 bottomsection p-2"
          style={{
            width: "90%",
            borderRadius: "20px",
            border: "1px solid rgba(51, 45, 160, 0.2)",
          }}
        >
          <div className="row">
            {doctors.map((doctor) => (
              <div className="w-25">
                <img
                  src={doctor.image}
                  alt="doctors_png"
                  className="img-fluid p-2"
                  key={doctor.id}
                  style={{
                    width: "150px",
                    height: "150px",
                    //objectFit: "contain",
                    //overflow: "hidden",
                  }}
                />
                <div className="text-center">
                  <h5>{doctor.name}</h5>
                  <h6>{doctor.role}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="w-75 topbar pb-1 ">
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default TopBar;
