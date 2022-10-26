import React from "react";

import IcSearch from '../../assets/img/pageSearch/ic_поиск.svg'

import "./Button.scss";

interface IButton {
  getAddress:() => void
}

const Button:React.FC<IButton> = ({getAddress}) => {
 
  return (
    <button className="button-search" onClick={() => getAddress()}>
      <img src={IcSearch} />
      Поиск
    </button>
  );
};

export default Button;
