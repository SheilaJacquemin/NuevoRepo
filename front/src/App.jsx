import {useState} from 'react'
import {Routes ,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Session } from './context/Session';
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";


// import * as ReactDOM from "react-dom/client";


import PaginaPrincipal from "./components/vistas/PaginaPrincipal"
import VistaConductores from "./components/vistas/VistaConductores";
import VistaEmpresas from "./components/vistas/VistaEmpresas";
import VistaPasajeros from "./components/vistas/VistaPasajeros";
import IniciarSesion from "./components/vistas/IniciarSesion"
import Registro from "./components/vistas/Registro"
import HomeUsuario from './components/nav/HomeUsuario';
import ViajePage from './components/ViajarPage/ViajePage'

import UsuarioPasajero from './components/usuarios/UsuarioPasajero';
import UsuarioEmpresa from './components/usuarios/UsuarioEmpresa';
import UsuarioConductor from './components/usuarios/UsuarioConductor';
import { SessionProvider } from './context/Session';
import CrearrConductor2 from './components/usuarios/CrearrConductor2'

// import LoginCliente from './pages/clientes/LoginCliente'
// import HomeClientes from './pages/clientes/HomeClientes';

import './App.css'

function App() {
  const [session, setSession] = useState({
    isLogged: false,
    user: null, // Puedes inicializar user como null u incluso con algunos valores iniciales si lo prefieres
  });
  return (
   <>
   <SessionProvider value={{session,setSession}}>
    <Routes>
    <Route path='/' element= {<PaginaPrincipal/>} />
    <Route  path= "/inicio" element= {<PaginaPrincipal/>} />
   <Route  path= "/pasajeros" element= {<VistaPasajeros/>} />
   <Route path= "/conductores" element= {<VistaConductores/>} />
    <Route  path= "/empresas" element= {<VistaEmpresas/>}  />
    <Route path= "/iniciarSesion" element= {<IniciarSesion/>} />
    <Route  path= "/registro" element= {<Registro/>}  />
    <Route  path= "/homeUsuario" element= {<HomeUsuario />} />

    //rutas para usuarios ya registrados...
   
    {/* <Route path="/usuarioPasajero" element={<UsuarioPasajero/>} /> */}
    <Route path="/usuarioPasajero" element={<ViajePage/>} />
    <Route path="/usuarioConductor" element={<UsuarioConductor/>} />
    <Route path="/usuarioEmpresa" element={<UsuarioEmpresa/>} />
    <Route path="/crearConductor" element={<CrearrConductor2/>} />
     {/* <Route path='viajar' element={<ViajarPage />} /> */}

    </Routes>
   </SessionProvider>
   
   
   </>
  );
}

export default App;