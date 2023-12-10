import React from "react";
import humanito from "../../../assets/humanito.jpg";
function Introduccion() {
  return (
    <div className="contenedor">
      <div className="contenido container">
        <div className="empresas-contenido">
          <h1>
            RideFor es una plataforma en línea diseñada para mejorar la
            eficiencia y la rentabilidad de las empresas de transporte en
            Formosa.
          </h1>
          {/* Agrega más información aquí */}
          
        </div>
        <div className="inner">
          <img
            src={humanito}
            alt="humano"
            className="humano"
            // width="100%"
            // height="auto"
            role="img"
            aria-label="imagen"
          />
        </div>
        {/* <div>
          
          <p>
            <h3>
              Estamos encantados de darles la bienvenida a nuestra plataforma de
              transporte de pasajeros. En Formosa hay empresas que buscan
              soluciones eficientes y confiables de transporte para sus
              empleados y clientes, y estamos aquí para ofrecerle exactamente
              eso. Al unirse a nuestra plataforma como empresa, disfrutará de
              una amplia gama de beneficios, incluida la capacidad de gestionar
              fácilmente múltiples viajes y reservas, un control total sobre los
              gastos de transporte y la tranquilidad de saber que nuestros
              conductores profesionales brindarán un servicio de alta calidad.
            </h3>
          </p>
        </div> */}
        {/* <div className="container">
          <h3>
            Nuestro equipo está listo para colaborar estrechamente con su
              empresa para adaptar nuestros servicios a sus necesidades
              específicas. Ya sea que necesite traslados regulares para sus
              empleados, transporte de clientes VIP o cualquier otro servicio de
              transporte personalizado, estamos aquí para ayudar. Únase a
              nosotros hoy mismo y descubra cómo podemos simplificar y optimizar
              sus necesidades de transporte. ¡Esperamos trabajar juntos para
              brindar experiencias de viaje excepcionales a su empresa y sus
              clientes! Regístrese ahora y comience a aprovechar nuestros
              servicios de transporte especializados. ¡Estamos emocionados de
              tenerlos a bordo!
              
          </h3>
        </div> */}

        
      </div>
    </div>
  );
}

export default Introduccion;
