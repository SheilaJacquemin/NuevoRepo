import React, { useContext, useState } from "react";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Session } from '../../context/Session';

const CrearConductor = () => {
  const { session } = useContext(Session);
  const { user } = session;
  const navigate = useNavigate();

  const [conductor, setConductor] = useState({
    name: '',
    description: '',
    email: '',
    password: '',
    price: '',
    patente: '',
    image: [null, null, null], // Array para almacenar las 3 imágenes
    id_empresa: user.data.id,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setConductor({
      ...conductor,
      [name]: value
    });
  }

  const handleImageChange = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    
    setConductor((prevState) => {
      const updatedImages = [...prevState.image];
      const imageIndex = parseInt(name.substr(-1)) - 1;
      updatedImages[imageIndex] = file;
      return { ...prevState, image: updatedImages };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in conductor) {
      if (key === 'image' && conductor[key]) {
        conductor[key].forEach((image, index) => {
          if (image) {
            formData.append(`image${index + 1}`, image); // Sumar 1 al índice
            console.log(`image${index + 1}`); // Sumar 1 al índice
          }
        });
      } else {
        formData.append(key, conductor[key]);
      }
    }

    const opciones = {
      method: 'POST',
      body: formData,
    };

    try {
      const resp = await fetch('http://localhost:3000/api/conductor/create', opciones);

      if (resp.ok) {
        // Restablece el formulario o realiza acciones necesarias

        setConductor({
          name: '',
          description: '',
          email: '',
          password: '',
          price: '',
          patente: '',
          image: [image1, image2, image3],
          id_empresa: user.data.id,
        });
        
        console.log(conductor)

        swal({
          title: 'Conductor creado con éxito',
          text: 'Ya puede iniciar sesión',
          icon: 'success',
          timer: '5000',
          showCancelButton: false,
          showConfirmButton: false,
        });
      } else {
        alert('Revise las credenciales y vuelva a intentar :( ');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }

  return (
    <div className="container">
      <form className="formulario">
        {/* ... (otros campos de entrada) */}
        <h1>
          Crear conductor
        </h1>

        <div>
          <label htmlFor="image1">Imagen 1:</label>
          <input
            className="form-control"
            type="file"
            id="image1"
            name="image1"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <label htmlFor="image2">Imagen 2:</label>
          <input
            className="form-control"
            type="file"
            id="image2"
            name="image2"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div>
          <label htmlFor="image3">Imagen 3:</label>
          <input
            className="form-control"
            type="file"
            id="image3"
            name="image3"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div>
          {/* Botón para enviar el formulario */}
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Registrar Conductor
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearConductor;
