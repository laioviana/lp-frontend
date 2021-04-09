import { IconButton, makeStyles } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        color: '#fff !important'
    }
})

export default function Back() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <IconButton className={classes.button}
            onClick={() => history.goBack()}>
            <ArrowBack />
        </IconButton>
    )
}
