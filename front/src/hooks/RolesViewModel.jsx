import { useState } from 'react';

const RolesViewModel = () => {
  const [user, setUser] = useState(); // estado del usuario
  const [activeRole, setActiveRole] = useState(null); // Estado para mantener el rol activo

  // Función para cambiar el rol activo
  const changeUserRole = (newRole) => {
    // Aquí puedes agregar lógica adicional si es necesario, por ejemplo, enviar una solicitud al servidor
    // Luego, actualiza el estado del rol activo
    setActiveRole(newRole);
  };

  return {
    user,
    activeRole,
    changeUserRole,
  };
};

export default RolesViewModel;
