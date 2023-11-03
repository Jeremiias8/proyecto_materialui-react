import React, { useState, useEffect } from 'react'
import '../../index.css'
import { Link } from 'react-router-dom';

export const Inicio = () => {

  const [proyectos, setProyectos] = useState([]);

  const mostrarProyectos = () => {

  }

  useEffect(() => {
    mostrarProyectos();
  }, []);

  return (
    <div className="index-section">
      <h2>Portafolios</h2>

      <h3></h3>
      <button><Link to="https://github.com/Jeremiias8">Mostrar + proyectos</Link></button>

      <hr />

      <h3>Experiencia</h3>
      <button>
        <Link to="/experience">Mostrar timeline</Link>
      </button>
    </div>
  );

}
