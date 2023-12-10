import React from "react";
import autito from "../../assets/autito.jpg";
import "./../secciones/ejem.css";

const MenuInicio = () => {
  return (
    <div className="">
     
      <div className="unito">
        <div className="dosito">
          <img
            src={autito}
            alt="auto"
            className="autito"
            width="100%"
            height="auto"
            role="img"
            aria-label="imagen"
          />
        </div>
        <div className="trecito">
          <div className="card2 text-bg-light mb-3">
            <div className="card-header">Chat </div>
            <h1>¡Hola! Bienvenido a RideFor... ¿Qué queres hacer?</h1>
              
            </div>
            <div className="bottt">
                <button className="btn btn-outline-secondary">Solicitar Viaje</button>
              </div>
          </div>
        </div>
      </div>
  );
};

export default MenuInicio;
