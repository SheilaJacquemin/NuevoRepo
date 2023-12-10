// import React, { useRef, useState } from 'react'
// import Select, { components } from 'react-select'

// const { Option } = components

// const SolicitudesViaje = () => {
//   const [optSelected, setOptSelected] = useState()
//   const actions = ['my-location', 'map-location']

//   const optionsDesde = [
//     { value: actions[0], label: "Mi ubicación", icon: 'bi bi-crosshair' },
//     { value: actions[1], label: "Seleccionar en el mapa", icon: 'bi bi-geo-alt-fill' },
//   ]

//   const optionsDestino = [
//     { value: actions[0], label: "Seleccionar en el mapa", icon: 'bi bi-geo-alt-fill' },
//   ]

//   const handleSelectFrom = (selected) => {
//     if (selected.value === actions[1]) {
//       setOptSelected(null)
//     } else {
//       setOptSelected(selected)
//     }
//   }

//   const handleSelectTo = (event) => {
//     console.log(event)
//   }

//   const IconOption = ({ data, ...props }) => (
//     <Option {...props} >
//       <div className='row g-2'>
//         <div className='col-1'><i className={data.icon} /></div>
//         <div className='col-auto'>{data.label}</div>
//       </div>
//     </Option>
//   )

//   return (
//     <form>
//       <div className='row gy-4'>
//         <div className='col-12'>
//           <Select placeholder='Ubicación de espera' value={optSelected} onChange={handleSelectFrom} options={optionsDesde} components={{ Option: IconOption }} />
//         </div>

//         <div className='col-12'>
//           <Select placeholder='Ubicación de destino' options={optionsDestino} components={{ Option: IconOption }} />
//         </div>

//         <div className='col-12'>
//           <button className='btn btn-b btn-danger w-100' disabled>Buscar</button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default SolicitudesViaje







import React, { useRef, useState } from 'react';
import Select, { components } from 'react-select';

const { Option } = components;

const SolicitudesViaje = () => {
  const [optSelected, setOptSelected] = useState();
  const actions = ['my-location', 'map-location'];

  const optionsDesde = [
    { value: actions[0], label: "Mi ubicación", icon: 'bi bi-crosshair' },
    { value: actions[1], label: "Seleccionar en el mapa", icon: 'bi bi-geo-alt-fill' },
  ];

  const optionsDestino = [
    { value: actions[0], label: "Seleccionar en el mapa", icon: 'bi bi-geo-alt-fill' },
  ];

  const handleSelectFrom = (selected) => {
    if (selected.value === actions[1]) {
      setOptSelected(null);
    } else {
      setOptSelected(selected);
    }
  };

  const handleSelectTo = (event) => {
    console.log(event);
  };

  const IconOption = ({ data, ...props }) => (
    <Option {...props}>
      <div className='row g-2'>
        <div className='col-1'><i className={data.icon} /></div>
        <div className='col-auto'>{data.label}</div>
      </div>
    </Option>
  );

  // Simulación de solicitudes de viaje
  const viajes = [
    { id: 1, pasajero: 'Juan Perez', patente: 'ABC123', monto: 50.00 },
    { id: 2, pasajero: 'Maria Rodriguez', patente: 'XYZ789', monto: 35.00 },
    // Agrega más solicitudes según sea necesario
  ];

  return (
    <div>

      {/* Tarjetas de solicitudes de viaje */}
      <div className='row'>
        {viajes.map((viaje) => (
          <div key={viaje.id} className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{viaje.pasajero}</h5>
                <p className='card-text'>Patente: {viaje.patente}</p>
                <p className='card-text'>Monto: ${viaje.monto.toFixed(2)}</p>
              </div>
              <div className='col-12'>
            <button className='btn btn-b btn-danger w-100' disabled>Aceptar viaje</button>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolicitudesViaje;
