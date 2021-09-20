import React from "react";
import LoginSVG from "../assets/illustration/login.svg";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5 pt-5">
      <div className="container login">
        <div className="row mt-3">
          <div className="col-md-6">
            <img src={LoginSVG} className="img-fluid pt-4" alt="login" />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h3>Welcome Back</h3>
              <h3
                className=""
                style={{ fontSize: "20px", fontFamily: "MontessaratRegular" }}
              >
                To keep connected with us please login with your personal
                information by email address and password
              </h3>
              <label className="mt-4 form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
              <label className="mt-4 form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
              <div className="d-flex flx-row justify-content-between mt-3">
                <h6>Remember Me</h6>
                <a href="/">Forget Password?</a>
              </div>
              <div className="d-flex flx-row justify-content-between mt-4">
                <button
                  type="button"
                  className="btn btn-outline-primary px-4 btn_hover"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary px-5"
                  style={{
                    color: "#ffffff",
                    background: "#332DA0",
                    border: "1px solid #332DA0",
                  }}
                >
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

export default Login;
