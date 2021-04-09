import AppBar from '@material-ui/core/AppBar';
import { Grid,Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import Back from '../components/Back'

export default function MenuAppBar() {
        return (
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Back />
                        <Typography variant="h6">
                                Luxury Presence
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        );

}
