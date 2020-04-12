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

    async componentDidMount() {
        await firebaseApi.getMessages().then((msg) => {
            this.setState({messages: msg})
        }, (error) => console.log(error))
        console.log(this.state.messages)
    }


    render() {


        return (
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    {this.state.messages.map((msg, index) =>
                        <Paper style={{ margin: 30 }}>
                            <Mensaje index={index} titulo={msg.titulo} mensaje={msg.mensaje}/>
                        </Paper>
                    )
                    }


                </Grid>
            </Grid>
        );
    }
}

export default Mensajes;
