import React from "react";
import empresas from "../../assets/empresas.jpeg";
const Empresas = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <img
        src={empresas}
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
            Reservas Anticipadas:
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Las empresas pueden aprovechar la función de reservas anticipadas
            para garantizar la disponibilidad de transporte para sus empleados
            en eventos corporativos, reuniones importantes u otras ocasiones
            especiales.
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
            Herramientas de Administración:
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor proporciona herramientas avanzadas de administración de
            flotas para que las empresas supervisen y gestionen eficientemente
            múltiples vehículos y conductores. Esto incluye seguimiento en
            tiempo real, informes de rendimiento y mantenimiento programado.
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
            Seguridad y Verificación:
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Para garantizar la seguridad de los empleados, RideFor implementa
            medidas de verificación exhaustivas para los conductores asociados
            con programas corporativos. Esto puede incluir verificación de
            antecedentes, evaluación del historial de conducción y verificación
            de documentación del vehículo.
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
            Personalización de Servicios:
          </button>
        </h2>
        <div
          id="flush-collapsefour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Las empresas pueden personalizar la experiencia de viaje para sus
            empleados, estableciendo políticas internas como preferencias de
            vehículo, límites de gasto y restricciones geográficas.
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
            Integración con Sistemas Empresariales:
          </button>
        </h2>
        <div
          id="flush-collapsefive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor ofrece integración con sistemas empresariales existentes,
            facilitando la gestión y el seguimiento de los desplazamientos en
            conjunto con otras herramientas utilizadas por la empresa.
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
            Facturación:
          </button>
        </h2>
        <div
          id="flush-collapsesix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - Las empresas pueden aprovechar la facturación centralizada para
            simplificar los procesos contables, recibiendo facturas consolidadas
            y detalladas que incluyen todos los desplazamientos realizados por
            los empleados.
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
            Atención al Cliente Empresarial:
          </button>
        </h2>
        <div
          id="flush-collapseseven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor proporciona un servicio de atención al cliente dedicado
            para empresas, garantizando una respuesta rápida a consultas,
            solución de problemas y asistencia en la gestión de cuentas
            corporativas.
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
            Reportes Analíticos:
          </button>
        </h2>
        <div
          id="flush-collapseeight"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            - RideFor ofrece informes analíticos detallados para que las
            empresas puedan analizar el gasto en transporte, patrones de uso y
            eficiencia operativa, contribuyendo así a la toma de decisiones
            informada.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
