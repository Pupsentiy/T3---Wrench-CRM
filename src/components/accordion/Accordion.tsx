import React, { useState } from "react";

import { IMockNavBar } from "../navBar/NavBar";
import { mockAccordion } from "../../mock/mockData";

import arrow from "../../assets/img/navbar/Polygon 8.svg";
import "./Accordion.scss";

interface IMockAccordion {
  img: string;
  title: string;
  path: string;
}

const Accordion: React.FC<IMockNavBar> = (link) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className="accordion-button" onClick={() => setOpen(!open)}>
        <img src={link.img} alt="iconNavBar" />
        <span>{link.title}</span>
        <img src={arrow} className={open === false ? "active" : "img-arrow"} />
      </button>
      {open === true
        ? mockAccordion.map((accord: IMockAccordion, index: number) => (
            <a href={accord.path} key={index} className="sub_accordion-button">
              <img src={accord.img} alt="iconNavBar" />
              <span>{accord.title}</span>
            </a>
          ))
        : null}
    </>
  );
};

export default Accordion;
