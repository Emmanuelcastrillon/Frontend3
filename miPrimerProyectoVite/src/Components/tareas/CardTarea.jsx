import estiloCardTarea from "./Producto.module.css"
const CardTarea=({nombreTarea,setTareasHechas})=>{
    return(
        <div className={estiloCardTarea.tarjeta}>
            <h2 className={estiloCardTarea.name}>{nombreTarea}</h2>
            <button className={estiloCardTarea.boton} onClick={() => setTareasHechas((prev) => [...prev, nombreTarea])}>Hacer tarea</button>
        </div>
    )
}
export default CardTarea