import { useState } from 'react'
import ListaDoctores from './ListaDoctores'

const Doctores = () => {

    const [DocSearch,setDocSearch]=useState('')
    const [DocsFound,setDocsFound]=useState([])
    const [show,setShow]=useState(false)
    const [error,setError]=useState(false)


    let doctores = [
        { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
        { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
        { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
        { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
      ]

      //console.log(doctores)
     
      const handleOnChange=(event)=>setDocSearch(event.target.value.trim())
   
      //console.log(DocSearch)

      const handleFound=()=>{
        const filterDoctor=doctores.filter(doctor=>doctor.nombre.toLocaleLowerCase().includes(DocSearch.toLocaleLowerCase()))
        setDocsFound(filterDoctor)
        //console.log(DocsFound)
        if(filterDoctor.length>0){
            setShow(true)
            setError(false)
        }
        else{
            setShow(false)
            setError(true)
        }

      }

  return (
    <>
        <input type="text" placeholder='Buscar Doctor' onChange={handleOnChange}/>
        <button onClick={handleFound}>🔍</button>

        {show?
            <>
                 <h3>Doctores Encontrados</h3>
                 <ListaDoctores doctores={DocsFound}/>
            </>:
           
            <ListaDoctores doctores={doctores} />
        }
        {error&& <h3>No se encontaron doctores</h3>}
        
    </>
  )
}

export default Doctores