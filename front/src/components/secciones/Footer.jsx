import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="c-example-divider"></div>

      <div className=" container-fluid">
        <div >
          <div className="heading text-center">
            <div  className="head1">Sobre Nosotros</div>
            <p className="bdr"></p>
          </div>
          <div className="card-body">
            <div className="otro2 row m-0 pt-5">
              <div  className="card col-12 col-md-3">
                <div className="">
                  <div className="card-title">¿QUIENES SOMOS?</div>
                  <p>
                    <small className="textFoot">
                      Somos una compañia enfocada en al ambito de ventas de
                      productos , traemos una nueva forma de generar sus compras
                      para su comercio, Unase a Nosotros y gestione sus compras
                      con nuestra interfaz
                    </small>
                  </p>
                </div>
              </div>
              <div  className="otro card col-12 col-md-3">
                <div className="card-content">
                  <div className="card-title">CONTACTANOS</div>
                  <ul className="otro list-unstyled quick-info mb-4">
                    <li className="iconText">
                      <img className="iconitoFooter" src={phone} alt=""/>
                      <Link to="#" className="aa d-flex align-items-center">
                         +54 9
                        3704580220
                      </Link>
                    </li>
                    <li className="iconText">
                    <img className="iconitoFooter" src={email} alt=""/>
                      <Link to="#" className="aa d-flex align-items-center">
                        
                        LissMarket@hotmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div  className="otro card col-12 col-md-5">
                <div className="card-content">
                  <div className="card-title">METODOS DE PAGO</div>
                  <div className="row gallery">
                    <div className="col-6">
                      <Link to="#">
                        <img src={metodo1} alt="" className="img-fluida" />
                      </Link>
                      <Link to="#">
                        <img src={metodo2} alt="" className="img-fluida" />
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to="#">
                        <img src={metodo3} alt="" className="img-fluida" />
                      </Link>
                      <Link to="#">
                        <img src={metodo4} alt="" className="img-fluida" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


