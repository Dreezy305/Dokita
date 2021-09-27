import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSVG from "../assets/illustration/login.svg";
import Eye from "../assets/icons/eye.svg";
import EyeSlash from "../assets/icons/eye_slach.svg";

function Login() {
  const [visible, setVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light menu fixed-top">
        <div className="container">
          <a
            className="navbar-brand ms-5"
            href="/"
            style={{
              fontSize: "24px",
              fontStyle: "normal",
              lineHeight: "33px",
              fontWeight: "bold",
              fontFamily: "MontessaratExtraBold",
              color: "#332DA0",
            }}
          >
            Dokita
          </a>
        </div>
      </nav>
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
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="inputEmail4"
                />
                <label className="mt-4 form-label">Password</label>

                <input
                  name="password"
                  type={visible ? "text" : "password"}
                  class="form-control "
                  id="inputPassword4"
                />
                {visible ? (
                  <>
                    <img
                      src={EyeSlash}
                      alt="eye_slash"
                      className="eye-slash"
                      onClick={() => setVisible(!visible)}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={Eye}
                      alt="eye_icon"
                      onClick={() => setVisible(!visible)}
                      className="eye"
                    />
                  </>
                )}
                <div className="d-flex flx-row justify-content-between mt-3">
                  <h6>Remember Me</h6>
                  <a href="/">Forget Password?</a>
                </div>
                <div className="d-flex flx-row justify-content-between mt-4">
                  <a as={Link} href="/signup" target="_top">
                    <button
                      type="button"
                      className="btn btn-outline-primary px-4 btn_hover"
                    >
                      Create Account
                    </button>
                  </a>
                  <a as={Link} href="/dashboard" target="_top">
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
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
