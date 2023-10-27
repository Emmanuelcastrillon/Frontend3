import { useState } from "react"
import stylecard from "./Home.module.css"


const Card = ({plato,setPedidos}) => {

   // const { id, img, tipo, precio } = plato

  const [contador,setContador]=useState(0)

  const sumar=()=>{
    return(
      setContador(contador + 1)
    )
  }

  const restar=()=>{
    return(
      setContador((prevState)=>prevState-1)
    )
  }

  return ( 
    <div className={stylecard.card}>
        <img src={plato.img} alt="" className={stylecard.imagePizza}/>
        <h3 className={stylecard.name}>{plato.tipo}</h3>
        <h4 className={stylecard.pricePizza}>{plato.precio}</h4>

        <div className={stylecard.contenedorContador}>
          <button onClick={sumar}>+</button>
          <h4 className={stylecard.contador}>{contador}</h4>
          <button onClick={restar}>-</button>
        </div>
        <button className={stylecard.botonComprar} onClick={()=>setPedidos((prevState)=>[...prevState,{...plato,contador:contador}])}>Comprar</button>
    </div>
  )
}

export default Card