import React from 'react'
import { Link } from 'react-router-dom';

export const Inicio = () => {

  return (
    <div className="jumbo">

      <h1>Bienvenido al Blog con React</h1>
      <p>
        Blog creado con ViteJS y componentes de Material UI.
      </p>

      <Link to="/" className='button'>Ver +</Link>

    </div>
  );

}
