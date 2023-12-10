import React, { useState } from "react";

const FormRegister = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
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

    try {
      const resp = await fetch('http://localhost:3000/api/users/createWithImage', opciones);

      if (resp.ok) {
        alert('Registrado correctamente');
        setUser({
          name: "",
          lastname: "",
          email: "",
          password: "",
          phone: "",
          image: null
        });
      } else {
        alert('Revise las credenciales y vuelva a intentar');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }


  return (
    <form onSubmit={handleSubmit} className="form-home" encType="multipart/form-data">
      <div className="row gap-4">
        <div className="col-12">
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

        <div className="col-12">
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

        <div className="col-12">
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

        <div className="col-12">
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

        <div className="col-12">
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

        <div className="col-12">
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

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-outline-light">Registrarme</button>
        </div>
      </div>
    </form>
  );
};

export default FormRegister;
