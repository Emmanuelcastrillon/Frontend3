import estiloCard from "./Producto.module.css"

const CardProducto=({plantilla})=>{

    return(
        <div className={estiloCard.tarjeta}>
            <img className={estiloCard.imagen} src={plantilla.image} alt="" />
            <h2 className={estiloCard.name}>{plantilla.nome}</h2>
            <h3 className={estiloCard.price}>{plantilla.preco}</h3>
        </div>
    )



}
export default CardProducto