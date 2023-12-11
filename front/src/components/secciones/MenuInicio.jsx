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
          <div className="card2 titulopp">
            <h1
              style={{
                fontFamily: "cursive",
                fontWeight: "900",
                fontSize: "50px",
              }}
            >
              ¡Hola! Bienvenido a RideFor... <br />
              ¿Qué quieres hacer?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInicio;
