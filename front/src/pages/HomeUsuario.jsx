// Importa React desde el módulo 'react'
import React from 'react';
//import AdministracionEmpresas from '../secciones/empresas/AdministracionEmpresa';
import Cards from '../components/Card/Cards';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";


// Define una función llamada HomeUsuario que recibe unas props como parámetro
function HomeUsuario(props) {
  // Extrae la propiedad user de las props usando la desestructuración
  const { user } = props;

  // Retorna un elemento JSX que representa la página
  return (
    <>
      <div className='carta-principal'>
        <Cards />
      </div>
    </>
  );
}

// Exporta la función para que pueda ser usada desde otros archivos
export default HomeUsuario;
