import React, { useEffect } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { fetchPropertyList, changeRowsPerPage } from '../redux/actions/propertyList';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
      paper: {
        marginTop: 30,
        paddingLeft: 30,
        margin: 'auto',
        maxWidth: 800,
      },
      image: {
        width: 180,
        height: 180,
        margin: 'auto',
        display: 'block',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      imageSmall: {
        width: 90,
        height: 90,
      },
      title:{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10
      }
});


export default function ListProperty() {
    const classes = useStyles();
    let { search } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { properties, page, rowsPerPage, totalElements } = useSelector(state => state.propertyList);

    useEffect(() => {
        dispatch(fetchPropertyList(search, page, rowsPerPage));
        return () => { }
    }, []);

    const handleChangePage = (_, newPage) => {
        dispatch(fetchPropertyList(search, newPage, rowsPerPage));
    }

    function handleClick(item) {
        history.push({
            pathname: '/detail',
            state: { detail: item }
          })
    }

    return (
<React.Fragment>
            <Typography className={classes.title} variant="h6">
               List of Homes
            </Typography>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={totalElements}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={(event) => dispatch(changeRowsPerPage(event.target.value, search))}
            />
            <TableContainer>
                <Table>
                    <TableBody>
                        {properties.map((cust) => (
                            <TableRow key={properties.indexOf(cust)} >
                            <div className={classes.root}>
                                <Paper onClick={() => handleClick(cust)} style={{ cursor: 'pointer' }} className={classes.paper}>
                                    <Grid container spacing={2}>
                                    <Grid item style={{ paddingTop: 25}} >
                                        <img className={classes.image} alt="complex" src={`../.${cust.homeImage}`} />
                                        <Typography variant="body2" color="textSecondary">
                                            Price: ${cust.overview.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" justify="center" alignItems="center">
                                            <Grid item >
                                                <Typography variant="body2" color="textSecondary">
                                                    Neighborhood: {cust.overview.neighborhood}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Bed: {cust.overview.beds}
                                                    Bath: {cust.overview.baths}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Address: {cust.overview.address}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    City: {cust.overview.city}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    ZIP code: {cust.overview.zipcode}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                   Available: {cust.overview.available? "Yes" : "No"}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item  xs={12} sm  >
                                            <Grid container direction="row"   style={{ paddingTop: 10, paddingBottom: 10 }} spacing={2}>
                                                <Grid item xs={6}>
                                                 <img className={classes.imageSmall} alt="complex" src={`../.${cust.images[0]}`} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                <img className={classes.imageSmall} alt="complex" src={`../.${cust.images[1]}`} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                <img className={classes.imageSmall} alt="complex" src={`../.${cust.images[2]}`} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                <img className={classes.imageSmall} alt="complex" src={`../.${cust.images[3]}`} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                </Paper>
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    );
}


