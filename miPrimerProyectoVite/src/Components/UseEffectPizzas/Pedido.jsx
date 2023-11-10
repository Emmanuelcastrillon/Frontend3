import React, { useState } from 'react'
import Pizzas from "./Pizzas"
import { useEffect } from 'react'

const Pedido = () => {

  const [order,setOrder]=useState(false)
  const [desmonte,setDesmonte]=useState(false)


  useEffect(() => {
    setTimeout(() => {
        setOrder(true)
    },2000)
}, [])
useEffect(() => {
   
    console.log("El componente fue actualizado")
}, [order])

useEffect(() => {
    console.log("El componente se desmonto")
}, [])


  return (
    <div>
      
        <h1>Su pedido es:</h1>
        {order&&
             <Pizzas/>
        }
         
        <button onClick={()=>{setOrder(false),alert('Se cancelo el pedido')} }>Cancelar pedido</button>
    </div>
  )
}

export default Pedido