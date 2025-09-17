import React from "react"
import "./App.css"
import Saluto from "./saluto.jsx"
import CardUtente from "./CardUtente.jsx"

function App() {
  return (
    <>
      <Saluto />
      <CardUtente nome="Rob" email="rob@example.com"/>
      
    </>
  );
}

export default App;

