import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import swal from "sweetalert";
import { useContext } from 'react';
import { Session } from '../../context/Session';


const MyFormCreateEmpresa = () => {



  const { session } = useContext(Session);
  const { user } = session;

 
  const userId = user.data.id;
  const email = user.data.email;
  
  console.log("el user id es: ", userId);
  console.log("el user es: ", user)

  const navigate = useNavigate();

  const [empresa, setEmpresa] = useState({
    name: "",
    description: "",
    email: email,
    phone: "",
    image: null, // Inicialmente, no se adjunta ninguna imagen
    lat: "",
    lng: "",
    id_user: userId // id del usuario 
  });

  const handleInput = ({ target }) => {
    setEmpresa({
      ...empresa,
      [target.name]: target.value
    });
  };

  const handleImageChange = (event) => {
    setEmpresa({
      ...empresa,
      image: event.target.files[0] // Al seleccionar una imagen, se adjunta al registro
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in empresa) {
      if (key === "image" && empresa[key]) {
        formData.append(key, empresa[key]);
      } else {
        formData.append(key, empresa[key]);
      }
    }

    const opciones = {
      method: "POST", // Cambia el método a 'POST'
      body: formData
    };

    try {
      const resp = await fetch("http://localhost:3000/api/empresas/create", opciones);

      if (resp.ok) {
        setEmpresa({
          name: "",
          description: "",
          email: email,
          phone: "",
          image: null,
          lat: "",
          lng: "",
          id_user: userId
        });
        swal({
          title: "Registro exitoso",
          text: "La empresa se registró correctamente",
          icon: "success",
          timer: "5000",
          showCancelButton: false,
          showConfirmButton: false
        }).then(() => {
          navigate("/crearConductor"); // Redirige a la página de dashboard o donde desees.
        });
      } else {
        alert("Hubo un error al crear la empresa. Revise los datos y vuelva a intentar.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formulario" encType="multipart/form-data">
        <div>
          <h2>Formulario de Registro de Empresa</h2>
        </div>

        <br />

        <div>
          <label htmlFor="name">Nombre:</label>
          <textarea
            className="form-control"
            id="name"
            name="name"
            onChange={handleInput}
            placeholder="Ingrese el nombre de la empresa"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={handleInput}
            placeholder="Ingrese una descripción de la empresa"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="phone">número de celular:</label>
          <textarea
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleInput}
            placeholder="Ingrese un número de celular de la empresa"
            required
          />
        </div>
        <br />
        

  

        <div>
          <label htmlFor="lat">Latitud:</label>
          <input
            className="form-control"
            type="text"
            id="lat"
            name="lat"
            onChange={handleInput}
            placeholder="Ingrese la latitud de la empresa"
          />
        </div>
        <br />

        <div>
          <label htmlFor="lng">Longitud:</label>
          <input
            className="form-control"
            type="text"
            id="lng"
            name="lng"
            onChange={handleInput}
            placeholder="Ingrese la longitud de la empresa"
          />
        </div>
        <br />

        <div>
          <button type="submit" className="btn btn-primary">Crear Empresa</button>
        </div>
      </form>
    </div>
  );
};

export default MyFormCreateEmpresa;
