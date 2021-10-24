import React from "react";
import FaceBook from "../assets/logo/facebook.svg";
import Linkedln from "../assets/logo/linked.svg";
import Twitter from "../assets/logo/twitter.svg";

function Footer() {
  const Logos = [
    { id: 1, image: FaceBook },
    { id: 2, image: Linkedln },
    { id: 3, image: Twitter },
  ];
  return (
    <div>
      <footer className="footer mt-3">
        <div className="container mt-3">
          <div className="row  d-flex flex-row justify-content-around footer_row">
            <div className="col-md-4 mt-3 ">
              <h1>ABOUT</h1>
              <h5 className="pt-3 footer_p1">DOKITA</h5>
            </div>
            <div className="col-md-4 mt-3 ">
              <h1>ADDRESS</h1>
              <h5 className="pt-3 footer_p">9, James Street, Yaba, Lagos</h5>
            </div>
            <div className="col-md-4 mt-3">
              <h1>CONTACT</h1>
              <div className="pt-3 d-flex flex-row justify-content-around w-25 footer-p0">
                {Logos.map((logo) => (
                  <img
                    src={logo.image}
                    key={logo.id}
                    alt="company_logos ms-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
