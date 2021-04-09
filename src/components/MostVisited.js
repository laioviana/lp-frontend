import { Grid,Typography,makeStyles,Paper} from '@material-ui/core';
import React ,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { fetchMostVisited} from '../redux/actions/mostVisited';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,

      },
      paper: {
        margin: 'auto',
        maxWidth: 800,
        marginTop: 20,
        padding: 20
      },
      imageSmall: {
        width: 180,
        height: 132,
        margin: 'auto',
        display: 'block',
      },
      paperRoot:{
          flexGrow: 1,
          padding: 20
      }
 
});

export default function MostVisited() {
    const classes = useStyles();
    const  mostVisitedProperties  = useSelector(state => state.mostVisited.properties);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchMostVisited());
        return () => null
    }, []);
    

    function handleClick(item) {
        history.push({
            pathname: '/detail',
            state: { detail: item }
          })
    }

    return (
        <React.Fragment>
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography variant="h6" color="textSecondary">
                Most Visited
            </Typography>   
            <Grid container direction="row" >
            {mostVisitedProperties ? mostVisitedProperties.data.map((p) => (
                    <Grid key={mostVisitedProperties.data.indexOf(p)} item container direction="column" justify="center" alignItems="center" xs={3}>
                        <Grid item>
                            <img onClick={() => handleClick(p)} style={{ cursor: 'pointer' }} className={classes.imageSmall} alt="complex" src={`../.${p.homeImage}`} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                Price: ${p.overview.price}
                            </Typography>
                        </Grid>
                    </Grid>
            )) :""}
                </Grid>
            </Paper>
        </div>
        </React.Fragment>
    )
}
