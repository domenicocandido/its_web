import { useState } from "react";

const CambiaNome = () => {
  const [nome, setNome] = useState("Niccolò");

  const cambia = () => {
    if (nome === "Niccolò") {
      setNome("Giulia");
    } else {
      setNome("Niccolò");
    }
  };

  return (
    <div>
      <h3>{nome}</h3>
      <button className="btn btn-dark" onClick={cambia}>
        Cambia Nome
      </button>
    </div>
  );
};

export default CambiaNome;




