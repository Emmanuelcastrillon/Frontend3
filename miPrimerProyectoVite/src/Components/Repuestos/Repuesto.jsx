import React, { useState } from "react";
import CardRepuesto from "./CardRepuesto"

function App() {

  //useState
  const [numeroParte, setNumeroParte] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  //Event Handle
  const handleSubmit = (e) => {
    e.preventDefault();

    setNumeroParte(e.target.elements.numeroParte.value);
    setDescripcion(e.target.elements.descripcion.value);

    // Validación
    const isNumeroParteValid = numeroParte >= 3;
    const isDescripcionValid = descripcion.length >= 6;

    if (!isNumeroParteValid && !isDescripcionValid) {
      setError(
        "El número de parte debe tener 3 caracteres o más y la descripción debe tener 6 caracteres o más. Por favor, verifica la información."
      );
    } else if (!isNumeroParteValid) {
      setError(
        "El número de parte debe tener 3 caracteres o más. Por favor, verifica la información."
      );
    } else if (!isDescripcionValid) {
      setError(
        "La descripción debe tener 6 caracteres o más. Por favor, verifica la información."
      );
    } else {
      setError("");
      setFormSubmitted(true);
     
    }
  };

  const handleOnChange=(event)=>setNumeroParte(event.target.value)

  const handleOnChangeDescription=(event)=>setDescripcion(event.target.value.trim())

  

  return (
    <div className="App">
      <h1>Alta repuestos KiteSurf</h1>
     
        {!formSubmitted&&
             <form onSubmit={handleSubmit}>
             <div>
               <label >#Parte:</label>
               <input onChange={handleOnChange}
                 type="text"
                 name="numeroParte"
               />
             </div>
             <div>
               <label>Descripción:</label>
               <input onChange={handleOnChangeDescription}
                 type="text"
                 name="descripcion"
               />
             </div>
             <button type="submit" onClick={()=>setNumeroParte(numeroParte)}>Enviar</button>
           </form>
        }
     
      {error && <p>{error}</p>}
      {formSubmitted && (
        <CardRepuesto partNumber={numeroParte} description={descripcion} />
      )}
    </div>
  );
}

export default App;
