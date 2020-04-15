import React, {Component} from 'react';
import './MensajeForm.scss';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import firebaseApi from '../../api/api'
import Mensajes from "../Mensajes/Mensajes";
import Grid from "@material-ui/core/Grid";

class MensajeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            message: '',
            allMessages: [],
            status: false
        }
    }

    handleChange = name => event => this.setState({[name]: event.target.value})

    createMessage = (e) => {
        e.preventDefault();
        let messageData = {name: this.state.name, title: this.state.title, message: this.state.message}
        if (messageData.name === ""){
            messageData.name = "Anónimo"
        }
        firebaseApi.createMessage(messageData.name, messageData.title, messageData.message);
        this.setState({status: true});
        window.location.reload(false);
    };

    render() {
        return (
            <div className="MensajeForm-container">
                <div className="MensajeForm-container--form">
                    {!this.state.status ? <form onSubmit={this.createMessage}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="">Tu nombre (opcional)</label>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="Escriba su nombre (opcional)"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                        onChange={this.handleChange('name')}
                                        />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor="">Título del mensaje</label>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="Escriba el título del mensaje"
                                        variant="outlined"
                                        fullWidth
                                        name="title"
                                        onChange={this.handleChange('title')}
                                        required/>
                                </Grid>

                                <Grid item xs={12}>
                                    <label>Mensaje que quiere dar</label>

                                    <TextField
                                        id="outlined-basic"
                                        placeholder="Escriba el mensaje"
                                        variant="outlined"
                                        multiline
                                        fullWidth
                                        name="message"
                                        onChange={this.handleChange('message')}
                                        required/>
                                    <br/>
                                    <br/>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth>
                                        Enviar mensaje ✉️
                                    </Button>
                                </Grid>
                            </Grid>


                        </form>
                        : <h1>¡Mensaje enviado! No olvides de compartir la página</h1>}
                </div>
                <Mensajes></Mensajes>
            </div>
        );
    }
}

export default MensajeForm;
