import React from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {

  const [Writhing, setWrithing] = React.useState('Bienvenido a RunStore');
  
  return (
    <div>
      <header>
        <NavBar setValorNuevo={setWrithing} />
        <ItemListContainer greeting={Writhing}/>
      </header>
    </div>
  );
}

export default App