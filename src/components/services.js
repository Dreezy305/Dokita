import React from "react";
import Heart from "../assets/illustration/heart.svg";
import Brain from "../assets/illustration/brain.svg";
import Tooth from "../assets/illustration/tooth.svg";
import Knee from "../assets/illustration/knee.svg";
import CheckUp from "../assets/illustration/checkup.svg";
import BloodTest from "../assets/illustration/bloodtest.svg";
import Footer from "./footer";

function Services() {
  const Services = [
    { id: 1, item: Heart, content: "Cardiology" },
    { id: 2, item: Brain, content: "Neurology" },
    { id: 3, item: Tooth, content: "Dental" },
    { id: 4, item: Knee, content: "Orthopedic" },
    { id: 5, item: CheckUp, content: "Medical Checkup" },
    { id: 5, item: BloodTest, content: "Laboratory Test" },
  ];

  return (
    <div className="mt-5">
      <section className="services mt-5 pt-3">
        <h1 className="mt-5 mx-auto d-flex justify-content-center">
          HIGH QUALITY SERVICES
        </h1>
        <div className="container mt-3 mb-5 services_header">
          <div className="row">
            <h1 className="ms-5">Premium </h1>
            <p className="ms-5">HEALTHCARE</p>

            <div className="d-flex flex-wrap justify-content-center services_card">
              {Services.map((item) => (
                <div
                  className="card w-25 text-center m-4"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid rgba(54, 209, 219, 0.2)",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <div className="card-body">
                    <img
                      src={item.item}
                      alt="heart_svg"
                      className="img-fluid mx-auto mb-5 mt-3"
                    />
                    <h5 className="mb-3">{item.content}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* END HIGH QUALITY SERVICES */}

      <Footer />
    </div>
  );
}

export default Services;
