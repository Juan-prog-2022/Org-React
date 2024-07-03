import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const {type = "text"} = props

    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }


    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input
         placeholder={placeholderModificado} 
         required={props.required} 
         value={props.valor}
         onChange={manejarCambio}
         type={type}
         /> 
    </div>
}

export default Campo