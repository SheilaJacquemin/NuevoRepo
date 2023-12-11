import React, { useState } from "react";
import { useContext } from "react";
import { Session } from "../../context/Session";
import HomeUsuario from "../nav/HomeUsuario";

import { useNavigate } from "react-router-dom"; // Importa useNavigate

function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { session, setSession } = useContext(Session);
  const { user } = session;

  console.log("el usuario es ", user);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/users/login",
        opciones
      );

      if (response.ok) {
        // Autenticación exitosa: redirigir al usuario a la página principal
        // idUsuario = localStorage.getItem('idUsuario');
        const userData = await response.json();
        console.log("los datos de userData son", userData);
        setSession({ isLogged: true, user: userData });

        const roles = userData.data.roles;
        console.log("los roles son", roles);
        if (roles.length === 1) {
          const roleName = roles[0].name;

          if (roleName === "Conductor") {
            // Redirige a "usuarioConductor"
            navigate("/usuarioConductor");
          } else if (roleName === "Pasajero") {
            // Redirige a "usuarioPasajero"
            navigate("/usuarioPasajero");
          } else if (roleName === "Empresas") {
            // Redirige a "usuarioEmpresa"
            navigate("/usuarioEmpresa");
          }
        } else {
          // Si el usuario tiene los tres roles, redirige a "homeUsuario"
          navigate("/homeUsuario");
        }
      } else {
        // Error de autenticación: mostrar un mensaje de error
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error de red:", error);
      setErrorMessage("Hubo un error de red. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="container">
      {/* <h2>Inicio de Sesión</h2> */}
      <form
        onSubmit={handleSubmit}
        className="formulario"
        encType="multipart/form-data"
      >
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            className="form-control bg-transparent text-light"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            className="form-control bg-transparent text-light"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br />
        <div>
          <button className="btn btn-outline-light" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
