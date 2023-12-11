import React from "react";
// import Map from '../../components/Map'
import Map from "../../components/Map";
import SolicitudesViaje from "../../components/usuarios/ViajarPage/HomeConduct";
import Navconductores from "../../components/nav/Navconductores";

const ViajePage = () => {
  return (
    <div className="container-fluid ">
      <Navconductores />
      <div className="row g-3">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <div className="w-75 p-4">
            <h4 className="mb-4">solicitudes</h4>
            <SolicitudesViaje />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="shadow w-100" style={{ height: "70vh" }}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViajePage;
