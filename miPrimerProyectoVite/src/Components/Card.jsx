
import './Card.css'

const Card = ({plato}) => {

   // const { id, img, tipo, precio } = plato

  return ( 
    <div className='card'>
        <img src={plato.img} alt="" className='card-img'/>
        <h3>{plato.tipo}</h3>
        <h4>{plato.precio}</h4>
    </div>
  )
}

export default Card