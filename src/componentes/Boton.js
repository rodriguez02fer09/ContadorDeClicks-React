import React from "react";
import "../styles/boton.css"

function Boton ({texto, esBotonDeClick, manejarClick}){
    return(
        <button
        className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
        onClick= {manejarClick}>
        {texto}
      </button>
    )
}
export default Boton

//se puede hacer destructuracion de objetos
//{texto}
//se le agrega una clase al boton que va a estar condicionada
//a lo que va hacer el boton para eso se hace un operador ternario
