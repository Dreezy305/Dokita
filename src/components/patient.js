import React from "react";
import Login from "../assets/illustration/login.svg";

function Patient() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <img src={Login} className="img-fluid pt-4" alt="login" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h3>Welcome Back</h3>
              <h3>
                To keep connected with us please login with your personal
                information by email address and password
              </h3>
              <label for="inputEmail4" className="mt-4 form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
              <label for="inputPassword4" className="mt-4 form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
              <div className="d-flex flx-row justify-content-between mt-2">
                <h6>Remember Me</h6>
                <a href="/">Forget Password?</a>
              </div>
              <div className="d-flex flx-row justify-content-between mt-2">
                <button type="button" className="btn btn-outline-primary">
                  Create Account
                </button>
                <button type="button" className="btn btn-outline-primary">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
