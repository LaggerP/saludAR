import React, {Component} from 'react';
import './Mensajes.scss';
import firebaseApi from '../../api/api'
import Mensaje from '../Mensaje/Mensaje'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";



class Mensajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

     componentDidMount() {
        this.getAllMessages();
    }

    async getAllMessages() {
        await firebaseApi.getMessages().then((msg) => {
            this.setState({messages: [...this.state.messages,...msg]});
        })

    }

    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    {(this.state.messages || []).map((msg, index) =>
                        <Paper style={{ margin: 30 }}>
                            <Mensaje index={index} nombre={msg.nombre} titulo={msg.titulo} mensaje={msg.mensaje}/>
                        </Paper>
                    )
                    }


                </Grid>
            </Grid>
        );
    }
}

export default Mensajes;
