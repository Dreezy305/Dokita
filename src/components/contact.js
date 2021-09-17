import React from "react";
import Call from "../assets/illustration/call.svg";
//import Footer from "./footer";

function Contact() {
  return (
    <div className="pt-5">
      <section className="contact mt-5">
        <div className="container mb-5">
          <div className="row text-center d-flex flex-row justify-content-center p-5 ">
            <div className="col-md-6 contact_col1 d-flex flex-column mt-5">
              <p>With access to</p>
              <h1>24 HOUR EMERGENCY</h1>
              <p>Assistance</p>
            </div>
            <div className="col-md-4 d-flex flex-column contact_col2">
              <img
                src={Call}
                alt="emergency_call"
                className="img-fluid mb-2 w-50 h-50"
              />
              <button
                type="button"
                className="btn btn-primary btn-md mt-2 w-50 h-25"
              >
                021300234
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END CONTACT */}
      {/*<Footer />*/}
    </div>
  );
}
export default Contact;
