import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Component } from "react";
import React, { useState } from "react";

function App() {

  const [Writhing, setWrithing] = useState('Hola mundo');

  switch (window.location.pathname) {
    case "/":
      Component = (
        <ItemListContainer greeting={"Seleccionaste Home"}></ItemListContainer>
      );
      break;
    case "/Category":
      Component = (
        <ItemListContainer
          greeting={"Seleccionaste categoría"}
        ></ItemListContainer>
      );
      break;
    case "/Ofertas":
      Component = (
        <ItemListContainer
          greeting={"Seleccionaste ofertas"}
        ></ItemListContainer>
      );
      break;
    case "/TiendasOficiales":
      Component = (
        <ItemListContainer
          greeting={"Seleccionaste Tiendas Oficiales"}
        ></ItemListContainer>
      );
      break;
    case "/Vender":
      Component = (
        <ItemListContainer
          greeting={"Seleccionaste vender"}
        ></ItemListContainer>
      );
      break;
    default:
      Component = (
        <ItemListContainer
          greeting={"No se encuentra lo que estás buscando"}
        ></ItemListContainer>
      );
      break;
  }
  return (
    <div>
      <header>
        <NavBar></NavBar>
        {Component}
        <ItemListContainer greeting={Writhing}></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
