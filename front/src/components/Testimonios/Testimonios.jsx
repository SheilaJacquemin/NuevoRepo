import React from "react";
import pasajeros from "../../assets/pasajeros.jpeg";
const Testimonios = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <img
        src={pasajeros}
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
            Registro y Perfil Personalizado:
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            RideFor ofrece a los pasajeros la facilidad de registro,
            permitiéndoles crear perfiles personalizados con información
            relevante, preferencias de viaje y opciones de pago. Esto garantiza
            una experiencia personalizada y eficiente desde el principio.
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
            Solicitud de Viajes Intuitiva:
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            La aplicación móvil y el sitio web de RideFor proporcionan a los
            pasajeros una interfaz intuitiva para solicitar viajes. Desde la
            comodidad de su dispositivo, los usuarios pueden especificar su
            ubicación actual y destino deseado, obteniendo un presupuesto
            estimado antes de confirmar la solicitud.
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
            Asignación Eficiente de Conductores:
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            RideFor se enorgullece de asignar conductores de manera eficiente y
            rápida. Los pasajeros no solo obtienen la certeza de que su
            solicitud será atendida rápidamente, sino que también se benefician
            de la optimización de rutas para llegar a su destino de la manera
            más eficiente posible.
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
            Seguimiento en Tiempo Real:
          </button>
        </h2>
        <div
          id="flush-collapsefour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            La preocupación por la ubicación del conductor es cosa del pasado.
            Los pasajeros pueden realizar un seguimiento en tiempo real del
            recorrido del conductor asignado a través de la aplicación móvil o
            el sitio web de RideFor, lo que brinda tranquilidad y control
            durante todo el viaje.
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
            Proceso de Pago Electrónico:
          </button>
        </h2>
        <div
          id="flush-collapsefive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            RideFor simplifica el proceso de pago al ofrecer opciones de pago
            electrónico. Los pasajeros pueden realizar transacciones de forma
            segura y sin complicaciones, incluso tienen la opción de agregar una
            propina si así lo desean, todo integrado en la plataforma.
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
            Experiencia de Viaje Seguro:
          </button>
        </h2>
        <div
          id="flush-collapsesix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            La prioridad de RideFor es la seguridad del pasajero. Se promueve un
            ambiente seguro a través de conductores verificados y la posibilidad
            de calificar y proporcionar comentarios sobre la experiencia del
            viaje. Además, la plataforma está diseñada para adaptarse a las
            necesidades de los usuarios, ya sea para desplazamientos diarios,
            traslados al aeropuerto, o cualquier otra ocasión.
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
            Comunicación y Comentarios:
          </button>
        </h2>
        <div
          id="flush-collapseseven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            RideFor fomenta la comunicación abierta entre pasajeros y
            conductores. Los usuarios pueden calificar y dejar comentarios sobre
            cada viaje, contribuyendo así a la transparencia y calidad del
            servicio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
