import React from "react";
import MedicalGroup from "../assets/illustration/undraw_medical.svg";
import NursesGroup from "../assets/illustration/undraw_nurses.svg";
import "../App.css";

function Home() {
  return (
    <main>
      {/* INTRO SECTION  */}
      <section className="mt-5 mb-3">
        <div className="container  mx-auto mt-5 mb-5">
          <div className="row text-center home">
            <div className="col-md-6 align-items-start mt-5 home__text">
              <h2
                className=""
                style={{
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "59px",
                }}
              >
                LET’S TAKE CARE OF YOU
              </h2>
              <h2
                className=""
                style={{
                  fontSize: "24px",
                  lineHeight: "29px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontFamily: "MontessaratMedium",
                }}
              >
                Your Health, Our Priority
              </h2>
              <div className="d-flex flex-row ms-5 justify-content-start mt-5">
                <button
                  type="button"
                  className="btn btn-outline-primary ms-5 px-5 btn_hover sm:px-3 "
                  style={{ height: "36px", color: "#332DA0" }}
                >
                  SIGN UP
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary ms-3 px-5"
                  style={{
                    height: "36px",
                    color: "#ffffff",
                    background: "#332DA0",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </div>
            <div className="col-md-6 home__img">
              <img
                src={MedicalGroup}
                alt="illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END INTRO SECTION */}

      {/* ABOUT US SECTION */}
      <section className="about">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mt-4">
              <img src={NursesGroup} alt="nurses" className="img-fluid" />
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
                one of the best in the country. A range of services are offered
                at the hospital including caiology, neurology, surgery, dental
                care and high end laboratory test. We leverage the intellectual
                assest available to us to achieve your health goaals and desire.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT SECTION */}
    </main>
  );
}

export default Home;
