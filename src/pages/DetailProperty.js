import React from 'react';
import { useLocation } from "react-router-dom";
import { makeStyles, Paper, Typography,Grid,Divider} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
      },
    paper: {
        maxWidth: '50%',
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
      },
      image: {
        width: 360,
        height: 264,
        margin: 'auto',
        display: 'block',
        padding: 10
      },
      imageSmall: {
        width: 180,
        height: 132,
        margin: 'auto',
        display: 'block',
        padding: 10
      },
      paperRoot:{
          flexGrow: 1,
          padding: 20
      }
 
});

export default function ListProperty() {
    const classes = useStyles();
    const location = useLocation();
    let detail = location.state.detail;

    return (
        <React.Fragment>
            <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={9} container>
                        <Grid item xs={12}>
                            <img className={classes.image} alt="complex" src={`../.${detail.homeImage}`}/>
                        </Grid>
                        {detail.images.map((value, index) => (
                        <Grid item xs={6}>
                        <img className={classes.imageSmall} alt="complex" src={`../.${value}`}/>
                        </Grid>
                            ))};
                    </Grid>
                    <Grid item xs={3} >
                        <Paper className={classes.paperRoot} elevation={3}> 
                            <Typography variant="h6" color="textSecondary">
                                Property Information
                            </Typography>
                            <Typography variant="subtitle1" >
                                Overview
                            </Typography>
                            <Divider />
                            <Typography variant="body2" color="textSecondary">
                                Price: ${detail.overview.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Neighborhood: {detail.overview.neighborhood}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Bed: {detail.overview.beds}
                                Bath: {detail.overview.baths}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Address: {detail.overview.address}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                City: {detail.overview.city}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                ZIP code: {detail.overview.zipcode}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Available: {detail.overview.available? "Yes" : "No"}
                            </Typography>
                            <Typography variant="subtitle1" >
                                Facts and features
                            </Typography>
                            <Divider />
                            <Typography variant="body2" color="textSecondary">
                                Type: {detail.facts.type}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Year Built: {detail.facts.yearBuilt}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Heating: {detail.facts.heating}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Parking: {detail.facts.parking}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lot: {detail.facts.lot}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Stories: {detail.facts.stories}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        </React.Fragment>
    );
}


