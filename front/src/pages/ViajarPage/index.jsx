import React, { useEffect, useState } from "react";
import FormViaje from "./components/FormViaje";
import MapDinamic from "../../components/MapDinamic";
import ViajarContext from "./context/ViajarContext";
import { getLocationAddress } from "../../services/MapServices";
import FormIniciar from "./components/FormIniciar";
import getGeolocation from "./utils/getGeolocation";

// const initTravel = {
//   from: { lat: undefined, lng: undefined, label: undefined },
//   to: { lat: undefined, lng: undefined, label: undefined },
// }

const ViajePage = () => {
  const [userLocation, setUserLocation] = useState();
  const [markers, setMarkers] = useState([]);
  const [enableAddMarker, setEnableAddMarker] = useState(false);
  const [disableSelect, setDisableSelect] = useState(false);
  const [markerSelect, setMarkerSelect] = useState(); // puede ser entre from/to o undefined
  const [disableButtonStart, setDisableButtonStart] = useState(false);
  const [startTravel, setStartTravel] = useState(false);
  const [travelPolyline, setTravelPolyline] = useState([]);
  const [travel, setTravel] = useState();

  const handleAddMarkerPosition = async (position) => {
    setEnableAddMarker(false);
    setMarkers((prev) => [...prev, position]);
    let label = "Calle sin descripciÃ³n";
    const address = await getLocationAddress(position[0], position[1]);
    if (address) {
      label = address.addressLine1;
    }

    setDisableSelect(false);
    setTravel((prev) => ({
      ...prev,
      [markerSelect]: { lat: position[0], lng: position[1], label },
    }));
    setMarkerSelect(undefined);
  };

  const handleChangeStartTravel = (value) => setStartTravel(value);

  const context = {
    userLocation,
    travel,
    markerSelect,
    enableAddMarker,
    disableSelect,
    disableButtonStart,
    setTravel,
    setTravelPolyline,
    setEnableAddMarker,
    setMarkerSelect,
    handleChangeStartTravel,
  };

  useEffect(() => {
    if (markerSelect) {
      setDisableSelect(true);
      setEnableAddMarker(true);
    }
  }, [markerSelect]);

  useEffect(() => {
    setDisableButtonStart(true);
    if (travel?.from?.lat && travel?.from?.lng) {
      if (travel?.to?.lat && travel?.to?.lng) {
        setMarkers([travel.from, travel.to]);
        setDisableButtonStart(false);
      } else {
        setMarkers([travel.from]);
      }
    } else {
      setMarkers([]);
    }
  }, [travel]);

  useEffect(() => {
    if (!startTravel) {
      setTravelPolyline([]);
    }
  }, [startTravel]);

  useEffect(() => {
    getGeolocation(
      (pos) => setUserLocation(pos.coords),
      (err) => alert(err.message)
    );
  }, []);

  return (
    <div className="container-fluid px-5 mt-5">
      <div className="row g-3">
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
          <div className="w-75 p-4">
            <h4 className="mb-4">Comenzar un viaje</h4>
            <ViajarContext.Provider value={context}>
              {startTravel ? <FormIniciar /> : <FormViaje />}
            </ViajarContext.Provider>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="shadow w-100" style={{ height: "70vh" }}>
            <MapDinamic
              markers={markers}
              polylines={travelPolyline}
              addMakerEnable={enableAddMarker}
              onAddMarker={handleAddMarkerPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViajePage;
