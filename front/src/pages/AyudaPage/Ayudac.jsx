import React from "react";
import faq from "../../assets/faq.jpeg";
import politicas from "../../assets/politicas.jpeg";
import guia from "../../assets/guia.jpeg";
import encuestas from "../../assets/encuestas.jpeg";
import Navconductores from "../../components/nav/Navconductores";

const AyudacPage = () => {
  return (
    <div>
      <Navconductores />
      <div class="container px-4 ">
        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis">EN QUE PODEMOS AYUDARTE?</h2>
            <p class="text-body-secondary" style={{ fontSize: "20px" }}>
              La sección de ayuda de RideFor es una herramienta para los
              usuarios que buscan resolver problemas o obtener información
              adicional sobre la plataforma.
            </p>
            <a href="#" class="btn btn-primary btn-lg">
              Contacto
            </a>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
                  {/* <svg class="bi" width="1em" height="1em">
                    <use xlink:href="#collection" />
                  </svg> */}
                  <img
                    src={faq}
                    alt=""
                    style={{ width: "4em", height: "4em" }}
                  />
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Preguntas Frecuentes (FAQ):
                </h4>
                <p class="text-body-secondary">
                  Preguntas Frecuentes que aborde las consultas más comunes de
                  los usuarios.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
                  <img
                    src={guia}
                    alt=""
                    style={{ width: "4em", height: "4em" }}
                  />
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Guías de Uso:
                </h4>
                <p class="text-body-secondary">
                  Proporciona guías detalladas paso a paso sobre cómo utilizar
                  cada función de la plataforma.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
                  <img
                    src={politicas}
                    alt=""
                    style={{ width: "4em", height: "4em" }}
                  />
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Políticas y Términos:
                </h4>
                <p class="text-body-secondary">
                  Incluye enlaces directos a las políticas y términos de
                  servicio de RideFor.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
                  <img
                    src={encuestas}
                    alt=""
                    style={{ width: "4em", height: "4em" }}
                  />
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Encuestas y Comentarios:
                </h4>
                <p class="text-body-secondary">
                  Anima a los usuarios a proporcionar comentarios sobre la
                  sección de ayuda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyudacPage;
