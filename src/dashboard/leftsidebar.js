import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Dashboard from "../assets/icons/dashboard.svg";
import Doctors from "../assets/icons/doctors.svg";
import Appointment from "../assets/icons/appointment.svg";
import Setting from "../assets/icons/setting.svg";
import Logout from "../assets/icons/logout.svg";
import Billing from "../assets/icons/billing.svg";

function LeftSideBar() {
  const menus = [
    { id: 1, icon: Dashboard, title: "Dashboard", link: "" },
    { id: 2, icon: Doctors, title: "Doctors", link: "/doctors" },
    { id: 3, icon: Appointment, title: "Appointments", link: "/appointments" },
    { id: 4, icon: Billing, title: "Billing", link: "/billing" },
    { id: 5, icon: Setting, title: "Setting", link: "/selling" },
    { id: 6, icon: Logout, title: "Logout", link: "/logout" },
  ];
  const SideBarSection = ({ image, title, link = "/" }) => {
    console.log(image, title, link, "ll");
    const history = useHistory();

    return (
      <>
        <ul className="mt-3 sidelist" onClick={() => history.push(link)}>
          <li className="d-inline-block">
            <img src={image} className="float-left me-2" alt="logo_icon" />
            <p className="d-inline text-end ms-1">{title}</p>
          </li>
        </ul>
      </>
    );
  };

  SideBarSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  return (
    <div className="leftsidebar">
      <p className="ms-5 mb-5">Dokita</p>
      {menus.map((menu) => (
        <SideBarSection image={menu.icon} title={menu.title} link={menu.link} />
      ))}
    </div>
  );
}

export default LeftSideBar;
