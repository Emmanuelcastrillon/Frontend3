import React from 'react'
import styleEnvio from "./Home.module.css"

const Enviado = ({nombre, direccion}) => {
  return (
    <div>
        <h3 className={styleEnvio.mensajeEnvio}>Perfecto, {nombre}!</h3>
        <h4 className={styleEnvio.mensajeEnvio}>Ya estamos enviando tu pedido a {direccion}</h4>
    </div>
  )
}

export default Enviado