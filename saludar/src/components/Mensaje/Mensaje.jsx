import React from 'react'
import './Mensaje.scss'

const Mensaje = (props) => {
    return (
        <div className="Mensaje-container">
            <div className="">
                <h1> {props.titulo} 🤗</h1>
                <hr/>
                <br/>
                <h2>{props.mensaje}</h2>
                <h4>De: {props.nombre}</h4>

            </div>
            <div className="Mensaje-container-icono">

            </div>
        </div>
    )
}


export default Mensaje
