import React from "react";
//import Login from "../auth/login";
import Register from "../assets/illustration/signup.svg";

function Patient() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6">
            <img src={Register} alt="sign_up" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h3 style={{ color: "color: rgba(18, 18, 18, 0.6)" }}>
                Register
              </h3>
              <h3
                className=""
                style={{ fontSize: "20px", fontFamily: "MontessaratRegular" }}
              >
                Your data is safe and secure with us. No third party has access
                to your infomation
              </h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
