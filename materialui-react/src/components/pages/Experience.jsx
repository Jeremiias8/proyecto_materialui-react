import React from 'react'
import { Link } from 'react-router-dom';
import '../../index.css'

export const Experience = () => {

  return (
    <div className='experience'>
        <h1>Mi Experiencia aquí: </h1> 

        <div>
            <section className="exp-section">
                <h2>Auxiliar Administrativo</h2>
                <strong><i>Oct-Dic, 2019.</i></strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa fuga, laboriosam exercitationem harum eligendi necessitatibus quaerat enim eaque tempora consequatur, nostrum quos? Quas modi mollitia libero cupiditate explicabo ipsam?</p>
            </section>

            <section className="exp-section">
                <h2>Técnico Auxiliar HW y SW</h2>
                <strong><i>Mar-Jun, 2022.</i></strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore veritatis facere, vitae dolor itaque ea adipisci illo? Odit ea similique dicta minus blanditiis cumque doloremque quia mollitia maiores cupiditate!</p>
            </section>
        </div>

        <button><Link to="/inicio">Volver</Link></button>
    </div>
  );

}
