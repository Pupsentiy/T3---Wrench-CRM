import React, { useEffect, useState, version } from "react";

import Button from "../../components/button/Button";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAddressInfo } from "../../store/addressInfo/asyncActions";
import { selectAddresSlice } from "../../store/addressInfo/slice";
import { Suggestion } from "../../store/addressInfo/types";

import "./SearchAddress.scss";

const SearchAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const { suggestions } = useAppSelector(selectAddresSlice);
  const [value, setValue] = useState<string>("");

  const getAddress = async () => {
      if(value.length >= 3){
        dispatch(fetchAddressInfo(value));
      }
  };
 
  const onSearchByCity = (text: string) => {
    setValue(text);
  };

  return (
    <section className="container">
      <h2>Поиск адресов</h2>
      <h6>Введите интересующий вас адрес</h6>
      <div className="block-search">
        <input
          type="text"
          placeholder="Введите интересующий вас адрес"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearchByCity(e.target.value)
          }
        />
        <Button getAddress={getAddress} />
      </div>
     {value.length === 0 ?  null : value.length < 3 ? <p className="error">нужно больше символов!!!</p> : null}
      <div className="address-list">
        <h1>Адреса</h1>
        {suggestions.length > 0 &&
          suggestions.map((address: Suggestion, index: number) => (
            <p key={index}>
              {address.value}
            </p>
          ))}
      </div>
    </section>
  );
};

export default SearchAddress;
