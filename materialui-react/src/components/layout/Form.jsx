import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Form = () => {

  const [formulario, setFormulario] = useState("");

  const enviarPeticion = (e) => {
    e.preventDefault();

    let nombre = e.target.name.value;
    let business = e.target.business.value;

    if (formulario == true) {
      setFormulario("name:" + nombre, "business: " + business);

      console.log("form enviado correctamente !");
    }
  }

  return (
    <div>

      <Link to="/inicio" className='button'>Ver +</Link>

      <form className='form-ui' onSubmit={enviarPeticion}>

        <input type="text" name='name' placeholder="Nombre:" />
        <input type="text" name='business' placeholder="Empresa:" />
        <textarea name="text-field" id="text-field" ></textarea>
        
        <label htmlFor="ask">Quieres concretar una entrevista ?</label>
        <input type="submit" value="Enviar petición" />

      </form>

    </div>
  );

}
