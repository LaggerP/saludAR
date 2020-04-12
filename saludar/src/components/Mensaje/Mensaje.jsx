import React from 'react'
import './Mensaje.scss'

const Mensaje = (props) => {
    return (
        <div className="Mensaje-container">
            <div className="">
                <h1>{props.titulo}🤗</h1>
                <hr/>
                <p>{props.mensaje}</p>

            </div>
            <div className="Mensaje-container-icono">

            </div>
        </div>
    )
}


export default Mensaje
