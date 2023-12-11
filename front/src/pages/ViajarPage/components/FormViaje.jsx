import React, { useContext, useEffect, useState } from "react";
import Select, { components } from "react-select";
import ViajarContext from "../context/ViajarContext";

const { Option } = components;
const actions = ["my-location", "map-location"];

const FormViaje = () => {
  const {
    userLocation,
    travel,
    disableButtonStart,
    markerSelect,
    disableSelect,
    setTravel,
    setMarkerSelect,
    handleChangeStartTravel,
  } = useContext(ViajarContext);

  const optionsDesde = [
    { value: actions[0], label: "Mi ubicaci贸n", icon: "bi bi-crosshair" },
    {
      value: actions[1],
      label: "Seleccionar en el mapa",
      icon: "bi bi-geo-alt-fill",
    },
  ];

  const optionsDestino = [
    {
      value: actions[1],
      label: "Seleccionar en el mapa",
      icon: "bi bi-geo-alt-fill",
    },
  ];

  const handleSelectFrom = (selected, key) => {
    if (selected.value === actions[1]) {
      setMarkerSelect(key);
      setTravel((prev) => ({
        ...prev,
        [key]: { label: "Seleccione una ubicaci贸n en el mapa" },
      }));
    } else {
      setMarkerSelect(undefined);
      setTravel((prev) => ({
        ...prev,
        [key]: {
          label: selected.label,
          lat: userLocation?.latitude || -26.1867,
          lng: userLocation?.longitude || -58.1756,
        },
      }));
    }
  };

  useEffect(() => {
    if (travel?.from?.lat && travel?.from?.lng) {
      console.log('Latitud "desde":', travel.from.lat);
      console.log('Longitud "desde":', travel.from.lng);
    }
    if (travel?.to?.lat && travel?.to?.lng) {
      console.log('Latitud "hasta":', travel.to.lat);
      console.log('Longitud "hasta":', travel.to.lng);
    }
  }, [travel]);

  const IconOption = ({ data, ...props }) => (
    <Option {...props}>
      <div className="row g-2">
        {data.icon && (
          <div className="col-1">
            <i className={data.icon} />
          </div>
        )}
        <div className="col-auto">{data.label}</div>
      </div>
    </Option>
  );

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleChangeStartTravel(true);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="row gy-4">
          <div className="col-12">
            <Select
              isDisabled={disableSelect}
              value={travel?.from || null}
              onChange={(selected) => handleSelectFrom(selected, "from")}
              placeholder="Ubicaci贸n de espera"
              options={optionsDesde}
              components={{ Option: IconOption }}
            />
          </div>

          <div className="col-12">
            <Select
              isDisabled={disableSelect || !travel?.from}
              value={travel?.to || null}
              onChange={(selected) => handleSelectFrom(selected, "to")}
              placeholder="Ubicaci贸n de destino"
              options={optionsDestino}
              components={{ Option: IconOption }}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-danger w-100"
              disabled={disableButtonStart}
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormViaje;
