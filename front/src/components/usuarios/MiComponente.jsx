import { useContext } from 'react';
import { Session } from '../../context/Session'; // Asegúrate de proporcionar la ubicación correcta del archivo Session



function MiComponente() {
    const { session } = useContext(Session);
    const { user } = session;
  
    // Ahora puedes acceder a las propiedades de user
    const userId = user ? user.data.id : null; // Ejemplo de cómo acceder a la propiedad 'id'
  
    return (
      <div>
        <p>El ID del usuario es: {userId}</p>
      </div>
    );
  }
  
  export default MiComponente;
  