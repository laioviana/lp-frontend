import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Provider } from "react-redux";
import { Redirect, Route, Switch,BrowserRouter } from "react-router-dom";
import MenuAppBar from './components/MenuAppBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListProperty from './pages/ListProperty';
import DetailProperty from './pages/DetailProperty';
import store from "./redux/store";

const useStyles = makeStyles({
  contentWidth: {
    width: '100%',
    margin: 'auto',
    padding: '0px 20px'
  },
  alert: {
    marginTop: 10
  }
});


export default function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <React.Fragment>
      <MenuAppBar />
      <div className={classes.contentWidth}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list/:search">
            <ListProperty />
          </Route>
          <Route exact path="/detail">
            <DetailProperty />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
      <Footer />
      </React.Fragment>
    </Provider>
  );
}