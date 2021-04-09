import { Grid,Typography,makeStyles,Paper,InputBase,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      paddingTop: 80,
      paddingBottom: 80,  
      margin: 'auto',
      marginTop:20,
      maxWidth: 800,
    },
    textInput: {
        width: '70%',
    },
    rootPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        minWidth: '70%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
  }));

export default function Search() {
    const classes = useStyles();
    let history = useHistory();
    const [search, setSearch] = useState('');

    function handleClick() {
        history.push(`/list/${encodeURIComponent(search)}`);
    }


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>            
                <Grid container direction="column" justify="center" alignItems="center">
                    <div className={classes.textInput}>
                        <Typography variant="h6">
                                We have the best houses on the market, your next home is just a click away!
                        </Typography>
                    </div>
                    <Paper component="form" className={classes.rootPaper}>
                            <InputBase
                                onChange={event => setSearch(event.target.value)}
                                className={classes.input}
                                placeholder="Please search by City,neighborhood, or a ZIP code"
                                inputProps={{ 'aria-label': 'please search by city,neighborhood, or a zip code' }}
                            />
                            <IconButton type="button" onClick={handleClick} className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                    </Paper>
                </Grid>
            </Paper>
        </div>        
        );

}
