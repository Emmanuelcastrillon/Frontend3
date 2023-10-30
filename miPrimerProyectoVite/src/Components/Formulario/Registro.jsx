import styleRegistro from "./Formulario1.module.css"
const Registro=({nombreUsuario})=>{
    return(
        <div>
            <h4 className={styleRegistro.tituloDeRegistro}>Su registro ha sido exitoso {nombreUsuario}</h4>
        </div>
        
    )
}
export default Registro