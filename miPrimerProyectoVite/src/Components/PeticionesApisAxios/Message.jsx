import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styleMessage from "./Message.module.css"

const Message = () => {

    const endPoint='https://jsonplaceholder.typicode.com/comments'
    const [mensaje,setMensaje]=useState({})
    const [count,setCount]=useState(0)

    const  axiosApi=()=>{
        axios(endPoint)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            console.log(res.data[count])
            console.log(count)
            setMensaje(res.data[count]) 
        })
        .catch(err => console.log(err))
        
    }

    const handleSiguiente = () => {
        setCount( (count + 1)%500); // con %500 el contador solo llegara hasta el valor 500
      }

    useEffect(axiosApi,[count])

  return (
    <div>
       <ul className={styleMessage.lista}>
            <li className={styleMessage.subtitulo}>ID:      <span className={styleMessage.mensaje} > {mensaje.id}</span></li>
            <li className={styleMessage.subtitulo}>NAME:    <span className={styleMessage.mensaje}> {mensaje.name}</span></li>
            <li className={styleMessage.subtitulo}>EMAIL:   <span className={styleMessage.mensaje}> {mensaje.email}</span></li>
            <li className={styleMessage.subtitulo}>MESSAGE: <span className={styleMessage.mensaje}> {mensaje.body}</span></li>
       </ul>
       <button className={styleMessage.boton} onClick={handleSiguiente}>Siguiente</button>
    </div>
  )
}

export default Message