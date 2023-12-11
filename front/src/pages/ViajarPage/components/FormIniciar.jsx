import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { getTravelInfo } from "../../../services/MapServices";
import ViajarContext from "../context/ViajarContext";

const FormIniciar = () => {
  const [travelInfo, setTravelInfo] = useState();
  const { travel, setTravelPolyline, handleChangeStartTravel, user } =
    useContext(ViajarContext);
  const [conductores, setConductores] = useState([]);
  const [loading, setLoading] = useState(true);
  const tarifa = 0.25;

  const handleGetTravelTrace = async () => {
    const travelInfo = await getTravelInfo(travel.from, travel.to);
    if (travelInfo) {
      setTravelInfo(travelInfo);
      setTravelPolyline(travelInfo.trace);
    }
  };

  useEffect(() => {
    handleGetTravelTrace();
  }, []);

  useEffect(() => {
    // Hacer la solicitud GET al servidor
    axios
      .get("http://localhost:3000/api/users/findConductorMen")
      .then((response) => {
        setConductores(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de conductores:", error);
        setLoading(false);
      });
  }, []);

  const handleCreateAddress = async () => {
    try {
      // Realizar la solicitud POST para crear la dirección
      const response = await fetch("http://localhost:3000/api/address/create", {
        address: "Dirección de prueba", // Puedes ajustar esto según la información que tengas
        neighborhood: "Barrio de prueba", // Puedes ajustar esto según la información que tengas
        lat: travel.from.lat, // Tomar la latitud del punto de inicio
        lng: travel.from.lng, // Tomar la longitud del punto de inicio
        id_user: user.id, // Ajustar según tu lógica para obtener el ID de usuario
      });

      console.log("Respuesta de creación de dirección:", response.data);

      // Puedes manejar la respuesta según tus necesidades

      // Envía la solicitud de viaje al conductor seleccionado
      if (conductores.length > 0) {
        const conductorSeleccionado = conductores[0]; // Aquí puedes ajustar la lógica para seleccionar el conductor adecuado
        await enviarSolicitudViaje(conductorSeleccionado.id, response.data);
        console.log(
          "Solicitud de viaje enviada al conductor:",
          conductorSeleccionado.name
        );
      }
    } catch (error) {
      console.error("Error al crear la dirección:", error);
    }
  };

  const enviarSolicitudViaje = async (idConductor, idDireccion) => {
    try {
      // Realiza la solicitud POST para enviar la solicitud de viaje al conductor
      const response = await fetch(
        `http://localhost:3000/api/address/create/${idConductor}`,
        {
          id_direccion: idDireccion,
        }
      );

      console.log("Respuesta de solicitud de viaje:", response.data);

      // Puedes manejar la respuesta según tus necesidades
    } catch (error) {
      console.error("Error al enviar la solicitud de viaje:", error);
    }
  };

  return (
    travelInfo && (
      <>
        <div className="row gy-4">
          <div className="col">
            distancia: {(travelInfo.distance / 1000).toFixed(2)} km
          </div>
          <div className="col">
            precio: ${(travelInfo.distance * tarifa).toFixed(2)}
          </div>
          <div className="col-12 text-center">
            <button
              className="btn btn-success w-100"
              onClick={handleCreateAddress}
            >
              Iniciar
            </button>
          </div>
          <div className="col-12 text-center">
            <button
              className="btn btn-danger w-100"
              onClick={() => handleChangeStartTravel(false)}
            >
              Cancelar
            </button>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-12">
            {conductores.map((conductor) => (
              <div
                key={conductor.id}
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <h4>Conductor Disponible</h4>
                <div className="driver-card">
                  {conductor.image && (
                    <img
                      src={conductor.image}
                      alt="Conductor"
                      style={{ maxWidth: "200px" }}
                    />
                  )}
                  <p>Nombre: {conductor.name}</p>
                  <p>Apellido: {conductor.lastname}</p>
                  <button
                    onClick={() => enviarSolicitudViaje(conductor.id, null)}
                  >
                    Enviar Solicitud de viaje
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default FormIniciar;
