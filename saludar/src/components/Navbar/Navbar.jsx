import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'rgba(252,191,73,0.89)',
    },
    link: {
        color: 'white',
        fontSize: 25,
        textDecorationLine: 'none',
        wordSpacing: 10

    },
    divLink: {
        marginTop: 15,
        marginLeft: 14,
        marginRight: 14,
    }
}));


const Navbar = (props) => {

    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <div className={classes.divLink}>
                    <Link to="" className={classes.link}><span role="img" aria-label>Inicio🏠</span></Link>
                </div>
                <div className={classes.divLink}>
                    <Link to="/reportes" className={classes.link}><span role="img" aria-label>Reportes📊</span></Link>
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
