import { useState } from 'react'
import ClassComponent from "./ClassComponent"
import FunctionComponent from "./FunctionComponent"

function AppHook() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
    {toggle ? 
     <ClassComponent/> :
     <FunctionComponent/>
     }
     <button onClick={() => setToggle(!toggle)}>Cambiar a {toggle ? 'Funcion' : 'Clase'}</button>
    </>
  )
}

export default AppHook