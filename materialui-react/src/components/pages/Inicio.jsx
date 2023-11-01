import React, { useState, useEffect } from 'react'
import '../../index.css'

export const Inicio = () => {

  const [proyectos, setProyectos] = useState([]);

  const mostrarProyectos = () => {

  }

  return (
    <div className="index-section">
      <h2>Portafolios</h2>

      <h3></h3>
      <button>Mostrar + proyectos</button>

      <hr />

      <h3>Experiencia</h3>
      <button>Mostrar timeline</button>
    </div>
  );

}
