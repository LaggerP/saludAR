import React, {Component} from 'react';
import './Landing.scss';
import MensajeForm from "./MensajeForm/MensajeForm";

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="Landing-header">
                    <div className="Landing-header-title">
                        <h1><span>👏Sal</span>
                            <span>ud</span>
                            <span>AR🇦🇷</span></h1>

                        <p>Para aquellas personas que salen, se arriesgan y nos cuidan.</p>
                        <p>Les decimos <span>GRACIAS❤️</span></p>
                    </div>

                </div>
                <div className="Landing-header-body">
                    <MensajeForm></MensajeForm>
                </div>
                <div className="Landing-header-footer">
                     <span>Realizado con ❤️ por <a href="https://github.com/LaggerP">Pablo Lagger</a></span>
                </div>
            </div>
        );
    }
}

export default Landing;
