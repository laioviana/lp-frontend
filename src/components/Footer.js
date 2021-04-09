import AppBar from '@material-ui/core/AppBar';
import {  makeStyles,Grid,Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';


const useStyles = makeStyles({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '5%'
    }
  });

export default function Footer() {
    const classes = useStyles();
        return (
            <AppBar  className={classes.footer} position="static" color="secondary">
                <Toolbar>
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                        <Typography variant="overline">
                                v. 0.0.1 - Developed by Laio Dias
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        );

}
