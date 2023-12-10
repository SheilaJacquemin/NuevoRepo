import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMap = () => {
  const position = [-26.1867, -58.1756];

  return (
    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '90%', height: '90%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;