import estiloTarea from "./Producto.module.css"
import React, { useState } from 'react'
import CardTarea from './CardTarea.jsx'

const Tarea=()=>{
    const misTareas=["Trabajar","Estudiar","Trotar"]
    const [tareasHechas,setTareasHechas]=useState([])
    return(
        <div className={estiloTarea.contenedor}>
             <h1 className={estiloTarea.titulo}>Mis tareas</h1>    
             <div className={estiloTarea.tareas}>
                {misTareas.map((tarea)=>{
                    return(
                    <CardTarea  key={tarea} nombreTarea={tarea} setTareasHechas={setTareasHechas}/> 
                    )
                })} 
            </div>
            <div className={estiloTarea.lista}>
                <h2 className={estiloTarea.tituloTareasHechas}>Tareas hechas</h2>
                <ul>
                    {tareasHechas.map((tareaHecha)=>{
                        return(
                            <li key={tareaHecha}>{tareaHecha}</li>
                        )
                    })}
                </ul> 
            </div>
            
        </div>
       
    )
}
export default Tarea