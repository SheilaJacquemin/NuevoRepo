import React, { useState } from "react";
import { Link } from "react-router-dom";
import autito from "../../../public/autito.png";
import { Modal } from "react-bootstrap";
// import logo from "../../assets/logo.png"
// import FormLogin from '../../pages/HomePage/components/FormLogin'
// import MyForm from "../elementos/MyForm";
import "./nav.css";
import HomePage from "../../pages/HomePage";

const Navconductores = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="pt-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbarcito">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/inicio"
                  style={{ color: "#2890ff" }}
                >
                  <p
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "900",
                      fontSize: "x-large",
                    }}
                  >
                    <img
                      src={autito}
                      style={{ width: "50px", height: "45px" }}
                      alt=""
                    />{" "}
                    RideFor
                  </p>
                </Link>
              </li>
              <ul className="nav navbar-nav navbar-center">
                <li className="nav-item2">
                  <Link
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                    to="/usuarioconductor"
                  >
                    Solicitudes
                  </Link>
                </li>
                <li className="nav-item2">
                  <Link
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                    to="/Ayudac"
                  >
                    Ayuda
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal para Iniciar Sesión */}
      <Modal show={modalIsOpen} onHide={closeModal}>
        <HomePage />
      </Modal>
    </div>
  );
};

export default Navconductores;
