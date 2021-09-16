import React from "react";
import NursesGroup from "../assets/illustration/undraw_nurses.svg";
import CheckCircle from "../assets/icons/check_circle.svg";
import Researcher from "../assets/illustration/undraw_researcher.svg";

import Footer from "./footer";

function About() {
  const Why = [
    { id: 1, item: "Highly Experienced Doctors", icon: CheckCircle },
    { id: 2, item: "24/7 Emergency Support", icon: CheckCircle },
    { id: 3, item: "Cutting Edge Technology", icon: CheckCircle },
    { id: 4, item: "Quick laboratory test result", icon: CheckCircle },
  ];
  return (
    <div className="mt-5">
      {/* ABOUT US SECTION */}
      <section className="about mt-5">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 mt-4">
              <img src={NursesGroup} alt="nurses" className="img-fluid mb-5" />
            </div>
            <div className="col-md-6 mt-4">
              <h1 className="mb-3">
                We are the best clinic in the city, Know about us
              </h1>
              <p className="mt-3">
                Dokita is an advanced technology based hosptital commited to
                clinical and compassionate care. Dokita is recoognised as one of
                the top technology based health care solution providers in the
                heart of lagos and its board of professional specialists who
                provide the best of evidence based care ranks the hospital as
                one of the best in the country.{" "}
              </p>
              <p>
                A range of services are offered at the hospital including
                caiology, neurology, surgery, dental care and high end
                laboratory test. We leverage the intellectual assest available
                to us to achieve your health goaals and desire.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT US SECTION */}

      {/* WHY US SECTION */}
      <section className="why">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 mt-5 why__card">
              <div
                className="card mt-5 w-75"
                style={{
                  borderRadius: "15px",
                  border: "1px solid rgba(54, 209, 219, 0.2)",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              >
                <div className="card-body pt-5 pb-5 px-3 pe-5 why__cardbody">
                  <h5 class="card-title ms-4 mb-4">Why choosing Us?</h5>
                  <ul className="" style={{ listStyleType: "none" }}>
                    {Why.map((item) => (
                      <li key={item.id} className="mb-3">
                        <img
                          src={item.icon}
                          alt="check icon"
                          className="img-fluid me-4"
                        />
                        {item.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={Researcher}
                alt="researcher"
                className="img-fluid mb-5"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END WHY US SECTION */}

      <Footer />
    </div>
  );
}

export default About;
