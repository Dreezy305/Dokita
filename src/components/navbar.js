import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../styles/globals.scss";

function NavBar() {
  const RoutesList = [
    { id: 1, path: "/", title: "Home" },
    { id: 2, path: "/about", title: "About" },
    { id: 3, path: "/patient", title: "Patient Portal" },
    { id: 4, path: "/services", title: "Services" },
    { id: 5, path: "/blog", title: "Blog" },
    { id: 6, path: "/contact", title: "Contact" },
  ];
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light navs`}>
      <div className={`container-fluid navs__anchor`}>
        <a className="navbar-brand ms-5" href="/">
          DOKITA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end me-5"
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-evenly">
            {RoutesList.map((list) => (
              <li
                className="nav-item"
                key={list.id}
                as={Link}
                to={`${list.path}`}
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={list.path}
                >
                  {list.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
