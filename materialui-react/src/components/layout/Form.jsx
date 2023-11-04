import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Form = () => {

  const [usuario, setUsuario] = useState({});

  const enviarPeticion = e => {
    e.preventDefault();

    let datos = e.target;

    let usuario = {
      nombre: datos.nombre.value,
      business: datos.business.value,
      enviar: datos.enviar.value
    };

    console.log(usuario);

    setUsuario(usuario);
  }

  const cambiarDatos = e => {

    let name_del_input = e.target.name;
    let business_del_input = e.target.business;

    setUsuario(estado_previo => {
      return {
        ...estado_previo,
        [name_del_input]: e.target.value,
        [business_del_input]: e.target.value
      }
    });

    console.log(name_del_input, business_del_input);

  }

  return (
    <div>

      <span>
        <Link to="/inicio" className='see-more'>Ver +</Link>
      </span>

      {
        usuario.name && usuario.name.length >= 1 && 
        (
          <div>
              <strong>{usuario.nombre}</strong> 
              <br />
              es de la empresa: <p><i>{usuario.business}</i></p>
          </div>
        )
      }

      <form className='form-ui' onSubmit={enviarPeticion}>

        <input type="text" name='name' onChange={cambiarDatos} placeholder="Nombre:" />
        <input type="text" name='business' onChange={cambiarDatos}  placeholder="Empresa:" />
        <textarea name="text-field" onChange={cambiarDatos} id="text-field" ></textarea>
        
        <label htmlFor="ask">Quieres concretar una entrevista ?</label>
        <input type="submit" name='enviar' value="Enviar petición" />

      </form>

    </div>
  );

}
