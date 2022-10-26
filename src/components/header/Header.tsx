import React from "react";

import logo from "../../assets/img/header/Vector.svg";
import acc from "../../assets/img/header/ic_person.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="block_left">
        <img src={logo} alt="logo" />
        <h3>Wrench CRM</h3>
      </div>
      <div className="block_right">
        <a href="/">
          <img src={acc} alt="Acc" />
          Имя Фамилия
        </a>
      </div>
    </header>
  );
};

export default Header;
