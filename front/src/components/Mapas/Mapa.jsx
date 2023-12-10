import React from 'react'

const Mapa = () => {
    let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


initMap();
  return (
    <div>
        
    </div>
  )
}

export default Mapa