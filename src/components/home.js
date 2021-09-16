import React from "react";
import MedicalGroup from "../assets/illustration/undraw_medical.svg";
import NursesGroup from "../assets/illustration/undraw_nurses.svg";
import Researcher from "../assets/illustration/undraw_researcher.svg";
import CheckCircle from "../assets/icons/check_circle.svg";
import Heart from "../assets/illustration/heart.svg";
import Brain from "../assets/illustration/brain.svg";
import Tooth from "../assets/illustration/tooth.svg";
import Knee from "../assets/illustration/knee.svg";
import CheckUp from "../assets/illustration/checkup.svg";
import BloodTest from "../assets/illustration/bloodtest.svg";
import Surgeon from "../assets/team/surgeon.png";
import Dentist from "../assets/team/dentist.png";
import Neuro from "../assets/team/neurologist.png";
import Cardio from "../assets/team/cardiologist.png";
import "../App.css";

function Home() {
  const Teams = [
    { id: 1, image: Surgeon, name: "Dr.  Adams Jacob", role: "Surgeon" },
    { id: 2, image: Dentist, name: "Dr.  Yusuf Abdul", role: "Dentist" },
    { id: 3, image: Neuro, name: "Dr.  Chioma Victory", role: "Neurologist" },
    { id: 4, image: Cardio, name: "Dr.  Chioma Victory", role: "Cardiologist" },
  ];

  const Why = [
    { id: 1, item: "Highly Experienced Doctors", icon: CheckCircle },
    { id: 2, item: "24/7 Emergency Support", icon: CheckCircle },
    { id: 3, item: "Cutting Edge Technology", icon: CheckCircle },
    { id: 4, item: "Quick laboratory test result", icon: CheckCircle },
  ];

  const Services = [
    { id: 1, item: Heart, content: "Cardiology" },
    { id: 2, item: Brain, content: "Neurology" },
    { id: 3, item: Tooth, content: "Dental" },
    { id: 4, item: Knee, content: "Orthopedic" },
    { id: 5, item: CheckUp, content: "Medical Checkup" },
    { id: 5, item: BloodTest, content: "Laboratory Test" },
  ];

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
                className="img-fluid mb-5"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END INTRO SECTION */}

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
      {/* END ABOUT SECTION */}

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

      {/* HIGH QUALITY SERVICES */}
      <section className="services">
        <h1 className="mt-5 mx-auto d-flex justify-content-center">
          HIGH QUALITY SERVICES
        </h1>
        <div className="container mt-5 mb-5 services_header">
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

      {/* TEAM SECTION */}
      <section className="team">
        <h1 className="mt-5 mx-auto mb-5 d-flex justify-content-center">
          OUR DEDICATED DOCTORS TEAM
        </h1>
        <div className="container">
          <div className="row">
            {Teams.map((team) => (
              <div
                className="card w-25 border-0"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={team.image}
                  alt="team"
                  className=""
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                />
                <div className="card-body text-center">
                  <h5>{team.name}</h5>
                  <h6>{team.role}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END TEAM SECTION */}
    </main>
  );
}

export default Home;
