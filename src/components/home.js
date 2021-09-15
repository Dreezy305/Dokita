import React from "react";
import MedicalGroup from "../assets/illustration/undraw_medical.svg";
import "../App.css";

function Home() {
  return (
    <main>
      {/* INTRO SECTION  */}
      <section className="mt-5">
        <div className="container mx-auto mt-5">
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
                  className="btn btn-outline-primary ms-5 px-5 btn_hover "
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
    </main>
  );
}

export default Home;
