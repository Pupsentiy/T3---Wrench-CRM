import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";

import routesConfig from "./routes/routesConfig";
import './assets/styles/index.scss'

interface IRoute {
  path:string
  element:JSX.Element
}

const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Header/>
   <div className="wrapper">
   <NavBar/>
    <Routes>
        {routesConfig.map((route:IRoute, index:number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App