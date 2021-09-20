import React from "react";
//import Login from "../auth/login";
import Register from "../assets/illustration/signup.svg";

function Patient() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5 pt-5">
      <div className="container signup">
        <div className="row gx-5">
          <div className="col-md-6">
            <img src={Register} alt="sign_up" className="img-fluid pt-5 mt-3" />
          </div>
          <div className="col-md-6">
            <h3
              style={{
                color: " rgba(18, 18, 18, 0.6)",
                fontFamily: "MontessaratSemiBold",
              }}
            >
              Register
            </h3>
            <h3
              className="mb-3"
              style={{
                fontSize: "16px",
                fontFamily: "MontessaratRegular",
                color: " rgba(18, 18, 18, 0.6)",
              }}
            >
              Your data is safe and secure with us. No third party has access to
              your infomation
            </h3>
            <form onSubmit={handleSubmit} className="row g-4">
              <div class="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-4">
                <label className="form-label">Sex</label>
                <input type="text" className="form-control" />
              </div>
              <div class="col-md-8">
                <label className="form-label">Date Of Birth</label>
                <input type="text" className="form-control" />
              </div>
              <div class="col-md-4">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  Country
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputZip" class="form-label">
                  Phone
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Email
                </label>
                <input type="text" className="form-control" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Password</label>
                <input type="text" className="form-control" />
              </div>
              <div class="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input type="text" className="form-control" />
              </div>
            </form>
            <button
              type="button"
              className="mt-3 mb-5 float-end btn btn-outline-primary px-5"
              style={{ color: "#ffffff", background: "#332DA0" }}
            >
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
