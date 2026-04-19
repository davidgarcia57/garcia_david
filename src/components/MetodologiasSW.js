import React from "react";
import imgCascada from "../assets/cascada.png";
import imgModeloV from "../assets/modelov.png";
import imgAgiles from "../assets/agiles.png";
import imgScrum from "../assets/scrum.png";
import imgKanban from "../assets/kanban.png";
import imgXP from "../assets/xp.png";
import imgHibridas from "../assets/hibridas.png";
const MetodologiasSW = ({ onBack }) => {
  // Datos de las metodologías para evitar repetir código (DRY)
  const metodologias = [
    {
      id: "modalCascada",
      nombre: "CASCADA",
      color: "btn-primary",
      titulo: "Vista de Cascada",
      img: imgCascada, // <-- Aquí usamos la variable directamente, sin comillas
    },
    {
      id: "modalV",
      nombre: "MODELO V",
      color: "btn-secondary",
      titulo: "Vista Modelo V",
      img: imgModeloV,
    },
    {
      id: "modalAgiles",
      nombre: "ÁGILES",
      color: "btn-success",
      titulo: "Vista Metodologías Ágiles",
      img: imgAgiles,
    },
    {
      id: "modalScrum",
      nombre: "SCRUM",
      color: "btn-danger",
      titulo: "Vista Scrum",
      img: imgScrum,
    },
    {
      id: "modalKanban",
      nombre: "KANBAN",
      color: "btn-warning",
      titulo: "Vista Kanban",
      img: imgKanban,
    },
    {
      id: "modalXP",
      nombre: "XP",
      color: "btn-info text-white",
      titulo: "Vista XP (Extreme Programming)",
      img: imgXP,
    },
    {
      id: "modalHibridas",
      nombre: "HÍBRIDAS",
      color: "btn-dark",
      titulo: "Vista Híbridas-Modernas",
      img: imgHibridas,
    },
  ];

  return (
    <div className="container text-center mt-5">
      {/* Sección de Introducción */}
      <h2 className="mb-4">METODOLOGÍAS DE DESARROLLO DE SW</h2>
      <h3 className="mb-4">
        ¿Qué es una metodología de desarrollo de software?
      </h3>
      <p className="mb-5">
        Las metodologías de desarrollo de software son un conjunto de técnicas y
        métodos organizativos que se aplican para diseñar soluciones de software
        informático. El objetivo de las distintas metodologías es el de intentar
        organizar los equipos de trabajo para que estos desarrollen las
        funciones de un programa de la mejor manera posible.
      </p>

      <h2 className="mb-4">TIPOS DE METODOLOGÍAS</h2>
      <hr className="my-5" />

      {/* Grid de Botones */}
      <div className="row g-3 justify-content-center">
        {metodologias.map((m) => (
          <div key={m.id} className="col-6 col-md-4 col-lg-3">
            <button
              type="button"
              className={`btn ${m.color} w-100`}
              data-bs-toggle="modal"
              data-bs-target={`#${m.id}`}
            >
              {m.nombre}
            </button>
          </div>
        ))}
      </div>

      {/* Modales Dinámicos */}
      {metodologias.map((m) => (
        <div
          className="modal fade"
          id={m.id}
          key={`modal-${m.id}`}
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{m.titulo}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src={m.img} className="img-fluid rounded" alt={m.nombre} />
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr className="my-5" />

      {/* Enlaces y Footer */}
      <h3>LINK A TABLERO DE TRABAJO</h3>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
        <a
          href="https://ingreyeslara.atlassian.net/jira/software/projects/VV/boards/205?atlOrigin=eyJpIjoiOWEyZTQ0MTNlN2I0NDhhN2E5ZTVjNGVkMDNhZWM4ZWIiLCJwIjoiaiJ9"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noreferrer"
        >
          ---- JIRA ----
        </a>
      </div>

      <hr className="my-5" />

      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
        <button onClick={onBack} className="btn btn-outline-primary">
          ---- REGRESAR MENÚ PRINCIPAL ----
        </button>
      </div>

      <div className="mt-5">
        <h3 className="text-muted">
          "EL EXITO NO ES UN EVENTO, ES UN PROCESO QUE SE CONSTRUYE PASO A PASO"
        </h3>
        <h2 className="mt-4">Alumno: Garcia Paez David Israel </h2>
      </div>

      <hr className="my-5" />
    </div>
  );
};

export default MetodologiasSW;
