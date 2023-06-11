import React from "react";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../NavIcons/NavIcons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <LogoSearch />
        <NavIcons />
      </div>
    </>
  );
};

export default NavBar;
