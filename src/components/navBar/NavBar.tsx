import React, { useRef, useState } from "react";
import { mockNavBar } from "../../mock/mockData";
import Accordion from "../accordion/Accordion";

import "./NavBar.scss";

import burger from "../../assets/img/navbar/burger.svg";

export interface IMockNavBar {
  type: string;
  img: string;
  title: string;
  path?: string | undefined;
}

const NavBar: React.FC = () => {

  return (
    <section className="wrapper-navBar">
      <div className="title-wrapper">
        <h3 className="title">Меню</h3>
      </div>
      <nav className="navbar">
        {mockNavBar &&
          mockNavBar.map((link: IMockNavBar, index: number) => (
            <div key={index}>
              {link.type === "accordion" ? (
                <Accordion {...link} />
              ) : (
                <a href={link.path} className="navbar-button">
                  <img src={link.img} alt="iconNavBar" />
                  <span>{link.title}</span>
                </a>
              )}
            </div>
          ))}
      </nav>
    </section>
  );
};

export default NavBar;
