import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import {useState} from 'react'
// import PaginaPrincipal from "./components/vistas/PaginaPrincipal"
// import VistaConductores from "./components/vistas/VistaConductores";
// import VistaEmpresas from "./components/vistas/VistaEmpresas";
// import VistaPasajeros from "./components/vistas/VistaPasajeros";
// import IniciarSesion from "./components/vistas/IniciarSesion"
// import Registro from "./components/vistas/Registro"
// import { Session } from './context/Session';

// const [session, setSession] = useState({isLogged: false});

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PaginaPrincipal/>,
//   },
//   {
//     path: "/inicio",
//     element: <PaginaPrincipal/>,
//   },
//   {
//     path: "/pasajeros",
//     element: <VistaPasajeros/>,
//   },
//   {
//     path: "/conductores",
//     element: <VistaConductores/>,
//   },
//   {
//     path: "/empresas",
//     element: <VistaEmpresas/>,
//   },
//   {
//     path: "/iniciarSesion",
//     element: <IniciarSesion/>,
//   },
//   {
//     path: "/registro",
//     element: <Registro/>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Session.Provider value={[session,setSession]}>
//       <RouterProvider router={router} />
//     </Session.Provider>
//   </React.StrictMode>
// );
