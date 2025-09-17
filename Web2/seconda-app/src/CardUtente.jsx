import React from "react"

const CardUtente = () =>{
    console.log(props);
    return (
        <div className="card" style={{ width: "18rem" }}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-CardUtente">{props.nome}</h5>
    <p className="card-text">  {props.email} </p>
  </div>
</div>

    )
}

export default CardUtente