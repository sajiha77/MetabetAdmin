import React from "react";
import { NavContainer } from "./Nav.styles";
import { NavLink } from "react-router-dom";
import { first_array } from "../../JasonData/Nav_routes";

const NavItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Nav = () => {
  // const activeItems = first_array.findIndex(
  //   (item) => item.route === props.location.pathname
  // );

  return (
    <>
      <NavContainer>
        <div className="wrapper-link">
          {first_array.map((item, index) => (
            <NavLink to={item.route} key={index}>
              <NavItems title={item.display_name} />
            </NavLink>
          ))}
        </div>
      </NavContainer>
    </>
  );
};

export default Nav;
