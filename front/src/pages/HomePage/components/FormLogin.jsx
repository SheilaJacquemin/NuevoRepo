import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        window.location.href = "/homeUsuario"; // Reemplaza con tu URL real
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
    <form
      onSubmit={handleSubmit}
      className="text-white form-home"
      encType="multipart/form-data"
    >
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="row gap-3">
        <div className="col-12">
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
        <div className="col-12">
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
        <div className="col-12 text-center">
          <button className="btn btn-outline-light" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormLogin;
