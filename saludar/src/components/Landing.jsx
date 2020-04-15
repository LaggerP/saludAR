import React, {Component} from 'react';
import './Landing.scss';
import '../animate.css'
import MensajeForm from "./MensajeForm/MensajeForm";
import Navbar from "./Navbar/Navbar";

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="Landing-header ">
                    <div className="Landing-header-title">
                        <h1 className="animated bounceIn"><span role="img" aria-label>👏Sal</span>
                            <span role="img" aria-label>ud</span>
                            <span role="img" aria-label>AR🌞</span></h1>
                        <p className="animated fadeIn">Para aquellas personas que salen, se arriesgan y nos cuidan.</p>
                        <p className="animated fadeIn">Les decimos GRACIAS<span className="heart" role="img" aria-label>❤️</span></p>
                    </div>
                </div>
                <div className="Landing-header-body animated bounceInUp">
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
