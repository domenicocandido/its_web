import React, { useState } from "react";
import CambiaNome from "./Cambianome";
import Loginform from "./Loginform";

function App() {
  const [nome1, setNome1] = useState("Niccolò");
  const [persone, setPersone] = useState([]);
  const cambiaNome = () => {
    console.log(nome1);
    setNome1("Mario");
    console.log("Mario");
  };

  const cliccami = (nome, cognome) => {
    alert("Ciao " + nome + " " + cognome);
  };

  return (
    <div className="App">
      <CambiaNome />
      <h1>Primo Elemento</h1>
      <button onClick={cambiaNome}>Cambia nome</button>
      <p>Nome attuale: {nome1}</p>

      {/* <Esercizio /> */}
    </div>
  );
}

export default App;
