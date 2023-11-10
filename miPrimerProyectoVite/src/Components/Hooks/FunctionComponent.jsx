import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FunctionComponent = () => {
    const [name, setName] = useState('Emmanuel')
    // const [send, setSend] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log('Se ejecuta la parte lógica')
    //Montaje
    useEffect(() => {
        console.log('Este useEffect se ejecuta una sola vez')
    }, [])
    //Actualización
    useEffect(() => {
        console.log('Este useEffect se ejecuta cuando se actualiza name')
    }, [name])
    //Desmontaje
    useEffect(() => {
        return () => {
            console.log('Este useEffect se ejecuta cuando se desmonta el componente')
        }
    }, [])

    // useEffect(() => {
    //     if(send){
    //         console.log('Se envió el form')
    //     }
    // }, [send])


  return (
    <div>

        {console.log('Se ejecuta el render')}
        <h2>Componente de función</h2>
        <input type="text" onBlur={(e) => setName(e.target.value)} />
        {/* <button onClick={() => setSend(true)}>Enviar</button> */}
        {name}
    </div>
  )
}

export default FunctionComponent