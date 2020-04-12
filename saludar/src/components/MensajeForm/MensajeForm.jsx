import React, {Component} from 'react';
import './MensajeForm.scss';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import firebaseApi from '../../api/api'
import Mensajes from "../Mensajes/Mensajes";

class MensajeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: '',
            allMessages:[],
            status: false
        }
    }

    handleChange = name => event => this.setState({[name]: event.target.value})

    createMessage = (e) => {
        e.preventDefault();
        const messageData = {title: this.state.title, message: this.state.message}
        firebaseApi.createMessage(messageData.title, messageData.message);
        this.setState({status: true});
        window.location.reload(false);
    };

    render() {
        return (
            <div className="MensajeForm-container">
                <div className="MensajeForm-container--form">
                    {!this.state.status ? <form onSubmit={this.createMessage}>
                        <TextField
                            id="outlined-basic"
                            placeholder="Escriba el título del mensaje"
                            variant="outlined"
                            fullWidth
                            name="title"
                            onChange={this.handleChange('title')}
                            required/>
                        <br/>
                        <br/>
                        <TextField
                            id="outlined-basic"
                            placeholder="Escriba el mensaje"
                            variant="outlined"
                            multiline
                            fullWidth
                            name="message"
                            onChange={this.handleChange('message')}
                            required/>
                        <br/><br/>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth>
                            Enviar mensaje ✉️
                        </Button>
                    </form>
                        : <h1>Mensaje enviado</h1>}
                </div>
                <Mensajes></Mensajes>
            </div>
        );
    }
}

export default MensajeForm;
