import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, Box} from '@material-ui/core';
import {Facebook, Twitter, Instagram, YouTube, LinkedIn} from '@material-ui/icons';
import footer_img from "../../assets/footer_img.png"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E6E0E9',
        color: '#FFFFFF',
        padding: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
    },
    logo: {
        height: 50,
        marginRight: theme.spacing(2),
    },
    subtitle: {
        color: '#000000',
        width: '70%',
    },
    socialIcon: {
        borderRadius: '50%',
        fontSize: '30px',
        color: '#FFFFFF',
        backgroundColor: '#21005D',
        padding: theme.spacing(1),
        marginRight: theme.spacing(2),
        '&:hover': {
            color: '#FFFFFF',
        },
    },
    linkSection: {
        marginTop: '20px',
        borderTop: '2px solid #21005D',
        paddingTop: theme.spacing(3),
    },
    link: {
        fontWeight: 'bold',
        marginRight: theme.spacing(3),
        color: '#000000',
        textDecoration: 'none',
    },
    copyright: {
        color: '#000000',
        fontSize: '13px',
        marginTop: theme.spacing(1),
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Grid container alignItems="left">
                <Grid item xs={12} md={2}>
                    <img src={footer_img} alt="Logo" className={classes.logo}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography className={classes.subtitle}>
                        Conectamos a personas que comparten características en su identidad para potenciar su desarrollo
                        y contribuir al avance de la sociedad.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} container justify="flex-end">
                    <a href="#">
                        <Twitter className={classes.socialIcon}/>
                    </a>
                    <a href="#">
                        <Facebook className={classes.socialIcon}/>
                    </a>
                    <a href="#">
                        <Instagram className={classes.socialIcon}/>
                    </a>
                    <a href="#">
                        <YouTube className={classes.socialIcon}/>
                    </a>
                    <a href="#">
                        <LinkedIn className={classes.socialIcon}/>
                    </a>
                </Grid>
            </Grid>
            <Box className={classes.linkSection}>
                <Typography variant="subtitle1" align="left">
                    <a href="#" className={classes.link}>
                        Sobre Plural
                    </a>
                    <a href="#" className={classes.link}>
                        Quiero ser mentora
                    </a>
                    <a href="#" className={classes.link}>
                        Busca una mentora
                    </a>
                    <a href="#" className={classes.link}>
                        Comunidad
                    </a>
                    <a href="#" className={classes.link}>
                        Preguntas frecuentes
                    </a>
                    <a href="#" className={classes.link}>
                        Ayuda
                    </a>
                </Typography>
                <Typography variant="subtitle2" align="left">
                    <p className={classes.copyright}>Copyright 2023 @Plural</p>
                </Typography>
            </Box>
        </footer>
    );
}

export default Footer;
