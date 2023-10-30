import  { useState } from 'react'
import styleFormulario1 from "./Formulario1.module.css"
import Registro from './Registro'

function Formulario1() {

    const [usuario,setUsuario]=useState({
        nombre:"",
        edad:"",
        pokemon:""

    })
    const[listado,setListado]=useState([])
    
    const [validacionInputs,setValidacionIputs]=useState(false)
    const [validacionError,setValidacionError]=useState(false)
    


    const handleSubmit =(event)=>{
        event.preventDefault()
        const regex=/^[A-Za-z]+$/ //Expresion regular para solo letras
        if(usuario.nombre.length<3  || usuario.nombre=="" || !regex.test(usuario.nombre) || usuario.edad=="" || isNaN(usuario.edad) || usuario.pokemon==""){
           
            setValidacionError(true)
            setValidacionIputs(false)
           
        }
        else{
            setValidacionIputs(true)
            setValidacionError(false)
            
           
        }
    }
   
   
  return (
    <div className={styleFormulario1}>
        {!validacionInputs&&
        <form className={styleFormulario1.formulario} onSubmit={handleSubmit} >
            <h1 className={styleFormulario1.titulo}>Registro</h1>
            <input type="text" placeholder="Nombre Completo" className={styleFormulario1.inputs} value={usuario.nombre} onChange={(event)=> setUsuario({...usuario, nombre:event.target.value.trimStart()})}/>
            <input  placeholder="Edad" className={styleFormulario1.inputs} value={usuario.edad} onChange={(event )=>setUsuario({...usuario, edad:event.target.value.trimStart()})}/>
            <input type="text" placeholder='Pokemon Favorito' className={styleFormulario1.inputs} value={usuario.pokemon} onChange={(event)=>setUsuario({...usuario,pokemon:event.target.value.trimStart()})}/>
            <button className={styleFormulario1.botonRegistro} >Enviar</button>
           
        </form>

        }
        {validacionInputs? <Registro nombreUsuario={usuario.nombre}/> : null}

        {validacionError  && (<h4 className={styleFormulario1.mensajeError}>Por favor ingrese datos correctos</h4>)}
        
        <div>
            <h2 className={styleFormulario1.contenedorUsuarios}>Usuarios registrados</h2>
            <ul className={styleFormulario1.listaUsuarios}>
                {listado.map((nombreLista, index)=> <h4 key={index}>{nombreLista}</h4>)}
            </ul>
        </div>
      
    </div>
    
  )
 
}


export default Formulario1