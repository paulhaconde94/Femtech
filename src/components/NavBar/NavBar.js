import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import logo from '../../assets/footer_img.png'

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
        position: 'absolute'
    },
    logo: {
        width: '100px',
    },
    button: {
        borderRadius: '25px',
        backgroundColor: '#6750A4',
        color: '#fff',
        textTransform: 'none',
        marginRight: '10px',
        width: '175px',
        height: '40px',
        '&:hover': {
            backgroundColor: '#6750A4',
        },
    },
    userIcon: {
        color: '#6750A4',
        fontSize: '10px'
    },
    link: {
        color: '#000000',
        fontSize: '14px',
        fontWeight: 'bold',
        marginRight: theme.spacing(2),
    }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                        <img src={logo} alt="Logo" className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">
                            <a href="#" className={classes.link}>Sobre Plural</a>
                            <a href="#" className={classes.link}>Aprende</a>
                            <a href="#" className={classes.link}>Eventos</a>
                            <Button className={classes.button}>Quiero ser mentora</Button>
                            <Button className={classes.button}>Buscar mentora</Button>
                            <IconButton className={classes.userIcon}>
                                <AccountCircle/>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
