import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Session } from '../../context/Session';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert'

import autito from '../../assets/autito.jpg'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Pasajero",
    image: image1,
    text: "Podrás solicitar servicios de transporte en la plataforma, se te mostrarán los conductores particulares o de alguna empresa más cercanos a tu ubicación actual",
    url: "/usuarioPasajero",
    rol: "Pasajero"
  },
  {
    id: 2,
    title: "Conductor", 
    image: image2,
    text: "Podrás brindar tu servicio de transporte en la plataforma, tendrás acceso a los clientes que soliciten un viaje que estén cercanos a tu ubicación y se pondrán en contacto",
    url: "/usuarioConductor",
    rol: "Conductor"
  },
  {
    id: 3,
    title: "Empresa",
    image: image3,
    text: "Podrás mantener un control sobre tus empleados/conductores, llevar un registro de los viajes realizados de la forma más eficiente y en tiempo real. ",
    url: "/usuarioEmpresa",
    rol: "Empresas"
  },
];

function Cards() {
  const { session, setSession } = useContext(Session);
  const { user } = session;
  const navigate = useNavigate();

  const [newRole, setNewRole] = useState(''); // El nuevo rol que seleccionará el usuario

  const updateUserRole = async () => {
    if (!newRole) {
      console.log('Selecciona un nuevo rol antes de actualizar.');
     
      return;
    } 
      
    const userId = user.data.id;
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        newRole,
      }),
    };

    try {
      const response = await fetch('http://localhost:3000/api/users/updateRole', requestOptions);
      if (response.ok) {
        console.log('Rol actualizado con éxito.');

        // Realiza cualquier acción adicional después de la actualización.
      } else {
        console.log('Error al actualizar el rol.');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }

    // Actualiza el contexto con el nuevo usuario después de la actualización.
    const updatedUser = {
      ...user,
      data: {
        ...user.data,
        roles: [newRole], // Reemplaza la matriz de roles con el nuevo rol
      },
    };
    setSession({ ...session, user: updatedUser });
  }

  useEffect(() => {
    if (newRole) {

      updateUserRole();
      Swal.fire({
        title: `Bienvenido a Ridefor ${user.data.name}`,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://i.gifer.com/J4x.gif)',
        backdrop: `
          rgba(57, 0, 128, 0.48)
          url("https://i.gifer.com/3OdOO.gif")
          left top
          no-repeat
        `,
      }).then(() => {
        if (newRole === 'Conductor') {
          // Redirige a "usuarioConductor"
          navigate('/usuarioConductor');
        } else if (newRole === 'Pasajero') {
          // Redirige a "usuarioPasajero"
          navigate('/usuarioPasajero');
        } else if (newRole === 'Empresas') {
          // Redirige a "usuarioEmpresa"
          navigate('/usuarioEmpresa');
        }
        });
    }
  }, [newRole]);

  const handleCardClick = (selectedRole) => {
    
    // Swal.fire({
    //   title: 'Si estás seguro de elegir este rol, vuelve a seleccionarlo',
    //   allowOutsideClick: () => {
    //     const popup = Swal.getPopup()
    //     popup.classList.remove('swal2-show')
    //     setTimeout(() => {
    //       popup.classList.add('animate__animated', 'animate__headShake')
    //     })
    //     setTimeout(() => {
    //       popup.classList.remove('animate__animated', 'animate__headShake')
    //     }, 500)
    //     return false
    //   }
    // })

    const selectedCard = cards.find(card => card.title === selectedRole);
    if (selectedCard) {
      setNewRole(selectedCard.rol);

     
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, text, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} onSelectedRole={handleCardClick}>
              <button onClick={() => handleCardClick(title)}>Elegir rol de {title}</button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
