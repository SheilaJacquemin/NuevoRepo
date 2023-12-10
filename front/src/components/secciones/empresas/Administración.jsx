import React from 'react'
import './administracion.css'

const Administración = () => {
  return (
    <>
        <div className="sidebar">
        <h2> Empresa </h2>
        <ul>
            <li><a href="#">Gestión de conductores</a></li>
            <li><a href="#">Agregar Conductor</a></li>
            <li><a href="#">Editar Conductor</a></li>
            <li><a href="#">Eliminar Conductor</a></li>
        </ul>
        <ul>
            <li><a href="#">Gestión de pagos</a></li>
            <li><a href="#">Agregar Conductor</a></li>
            <li><a href="#">Editar Conductor</a></li>
            <li><a href="#">Eliminar Conductor</a></li>
        </ul>
        <ul>
            <li><a href="#">Supervisión y evaluación de desempeño</a></li>
            <li><a href="#">Agregar Conductor</a></li>
            <li><a href="#">Editar Conductor</a></li>
            <li><a href="#">Eliminar Conductor</a></li>
        </ul>
    </div>
    <div className="content">
       <h1>HOLA</h1>
    </div>
    </>
  )
}

export default Administración