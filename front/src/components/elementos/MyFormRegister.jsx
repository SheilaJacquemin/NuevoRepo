import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import swal from "sweetalert";


const MyFormRegister = () => {

  const navigate = useNavigate()


  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword:"",
    phone: "",
    image: null // Inicialmente, no se adjunta ninguna imagen
  });

  const handleInput = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  }

  const handleImageChange = (event) => {
    setUser({
      ...user,
      image: event.target.files[0] // Al seleccionar una imagen, se adjunta al registro
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in user) {
      if (key === 'image' && user[key]) {
        formData.append(key, user[key]);
      } else {
        formData.append(key, user[key]);
      }
    }

    const opciones = {
      method: 'POST', // Cambia el método a 'POST'
      body: formData,
    };

    if(user.password!==user.confirmPassword){
      return alert("las contraseñas no coinciden")
    }
    try {
      const resp = await fetch('http://localhost:3000/api/users/createWithImage', opciones);

      if (resp.ok) {
        setUser({
          name: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          image: null
        });
        swal({
          title: "Registro exitoso",
          text: "Ya puede iniciar sesión",
          icon: "success",
          timer: "5000",
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          //
        });
        // navigate('/iniciarSesion') 
      } else {
        alert('Revise las credenciales y vuelva a intentar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formulario" encType="multipart/form-data">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            className="form-control bg-transparent text-light"
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="lastname">Apellido:</label>
          <input
            className="form-control bg-transparent text-light"
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleInput}
            placeholder="Ingrese su apellido"
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            className="form-control bg-transparent text-light"
            type="email"
            id="email"
            name="email"
            onChange={handleInput}
            placeholder="Ingrese su correo electrónico"
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
            name="password"
            onChange={handleInput}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Repetir Contraseña:</label>
          <input
            className="form-control bg-transparent text-light"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInput}
            placeholder="Repita su contraseña"
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            className="form-control bg-transparent text-light"
            type="text"
            id="phone"
            name="phone"
            onChange={handleInput}
            placeholder="Ingrese su número de teléfono"
          />
        </div>
        <br />

        <div>
          <label htmlFor="image">Imagen de Perfil:</label>
          <input
            className="form-control bg-transparent text-light"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {user.image && (
            <div>
              <img
                src={URL.createObjectURL(user.image)}
                alt="Imagen de perfil"
                style={{ maxWidth: '200px' }}
              />
            </div>
)}
        <br />

        <div>
          <button type="submit" className="btn btn-outline-light">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default MyFormRegister;
