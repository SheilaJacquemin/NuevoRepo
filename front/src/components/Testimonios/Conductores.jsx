import React from "react";
import conductores from "../../assets/conductores.jpeg";
const Conductores = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <img
        src={conductores}
        alt=""
        style={{
          width: "700px",
          height: "400px",
          marginLeft: "440px",
        }}
      />
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Registro y Perfil del Conductor:
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - La plataforma permite a los conductores registrarse fácilmente,
            creando perfiles detallados que incluyen información personal,
            documentación relevante, y detalles sobre el vehículo. Esto facilita
            la verificación y establece un estándar de confiabilidad.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Aceptación de Solicitudes de Viaje:
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Una vez registrado y aprobado, los conductores pueden recibir
            solicitudes de viaje a través de la aplicación móvil de RideFor.
            Tienen la libertad de aceptar o rechazar solicitudes según su
            disponibilidad y preferencias.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Navegación y Rutas Optimizadas:
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - La plataforma RideFor ofrece herramientas de navegación integradas
            que ayudan a los conductores a optimizar sus rutas y llegar
            eficientemente a los destinos. Esto no solo mejora la experiencia
            del conductor, sino que también reduce los tiempos de espera para
            los pasajeros.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefour"
            aria-expanded="false"
            aria-controls="flush-collapsefour"
          >
            Sistema de Calificación y Comentarios:
          </button>
        </h2>
        <div
          id="flush-collapsefour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Los conductores son evaluados por los pasajeros al final de cada
            viaje, lo que contribuye a la construcción de una comunidad de
            confianza. Los comentarios proporcionados permiten a los conductores
            mejorar y mantener altos estándares de servicio.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefive"
            aria-expanded="false"
            aria-controls="flush-collapsefive"
          >
            Gestión de Ingresos y Pagos Electrónicos:
          </button>
        </h2>
        <div
          id="flush-collapsefive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor simplifica la gestión de ingresos para los conductores al
            ofrecer un sistema de pagos electrónicos. Los conductores pueden
            rastrear sus ingresos y recibir pagos de manera segura a través de
            la plataforma.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsesix"
            aria-expanded="false"
            aria-controls="flush-collapsesix"
          >
            Herramientas de Comunicación:
          </button>
        </h2>
        <div
          id="flush-collapsesix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor facilita la comunicación entre pasajeros y conductores a
            través de la aplicación. Los conductores pueden recibir
            instrucciones adicionales del pasajero o notificar sobre cualquier
            eventualidad, lo que contribuye a una experiencia de viaje más
            fluida.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseseven"
            aria-expanded="false"
            aria-controls="flush-collapseseven"
          >
            Programación y Flexibilidad:
          </button>
        </h2>
        <div
          id="flush-collapseseven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Los conductores tienen la flexibilidad de establecer sus propios
            horarios y decidir cuándo desean aceptar solicitudes de viaje. Esta
            característica permite a los conductores integrar fácilmente RideFor
            en su rutina diaria.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseeight"
            aria-expanded="false"
            aria-controls="flush-collapseeight"
          >
            Soporte y Recursos:
          </button>
        </h2>
        <div
          id="flush-collapseeight"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor ofrece soporte dedicado y recursos para ayudar a los
            conductores en caso de cualquier problema o pregunta. Esto incluye
            información sobre políticas de servicio, actualizaciones de la
            aplicación y asistencia en tiempo real.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conductores;
