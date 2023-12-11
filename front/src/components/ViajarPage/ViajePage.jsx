import React from "react";
import Map from "../../components/Map";
import FormViaje from "./components/FormViaje";
import Navusuario from "../nav/Navusuario";
import contador from "../../assets/contador.jpeg";

const ViajePage = () => {
  return (
    <div className="container-fluid">
      <Navusuario />
      <div className="row g-3">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <div className="w-75 p-4">
            <h4 className="mb-4">Comenzar un viaje</h4>
            <FormViaje />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="shadow w-100" style={{ height: "70vh" }}>
            <Map />
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        contador de viajes
      </h1>
      <img src={contador} style={{ paddingLeft: "150px" }} alt="" />
    </div>
  );
};

export default ViajePage;
