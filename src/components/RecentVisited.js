import { Grid,Typography,makeStyles,Paper} from '@material-ui/core';
import React ,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { fetchRecentVisited } from '../redux/actions/recentVisited';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,

      },
      paper: {
        margin: 'auto',
        maxWidth: 800,
        marginTop: 20,
        marginBottom: 20,
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

export default function RecentVisited() {
    const classes = useStyles();
    const  recentVisitedProperties  = useSelector(state => state.recentVisited.properties);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchRecentVisited());
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
                Recent Visited
            </Typography>   
            <Grid container direction="row" >
            {recentVisitedProperties ? recentVisitedProperties.data.map((p) => (
                    <Grid key={recentVisitedProperties.data.indexOf(p)} container direction="column" justify="center" alignItems="center" xs={3}>
                        <Grid item>
                            <img  onClick={() => handleClick(p)} style={{ cursor: 'pointer' }} className={classes.imageSmall} alt="complex" src={`../.${p.homeImage}`} />
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
