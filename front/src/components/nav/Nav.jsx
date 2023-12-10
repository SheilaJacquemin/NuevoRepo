import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Modal, Button} from "react-bootstrap"
// import logo from "../../assets/logo.png"
// import FormLogin from '../../pages/HomePage/components/FormLogin'
import MyForm from '../elementos/MyForm'
import './nav.css'
import HomePage from "../../pages/HomePage";

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbarcito">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item1">
                <Link 
                  className="nav-link active"
                  aria-current="page"
                  to="/inicio"
                  style={{color: 'rgb(204, 43, 43)'}}
                >
                  <p style={{fontFamily:'cursive', fontWeight:'900', fontSize:'x-large'}}>RideFor</p>
                </Link>
              </li>
              <ul className="nav navbar-nav navbar-center">
                <li className="nav-item2">
                  <Link className="nav-link" to="/pasajeros">
                    Pasajeros
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link className="nav-link" to="/conductores">
                    Conductores
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link className="nav-link" to="/empresas">
                    Empresas
                  </Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item3">
                  <button className="nav-link" onClick={openModal}>
                    Iniciar Sesión
                  </button>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal para Iniciar Sesión */}
      <Modal show={modalIsOpen} onHide={closeModal}>
      <HomePage/>
      </Modal>
    </div>
  );
};

export default Nav;
