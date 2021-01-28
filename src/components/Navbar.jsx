import React from 'react';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stepper from '../Stepper/index'
import LoginForm from '../Forms/LoginForm'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Social
                </Typography>
                <Button color="inherit"><Link style={{color:"white"}} to="/">Home</Link></Button>
                <Button color="inherit"><Link style={{color:"white"}} to="/login">Login</Link></Button>
                <Button color="inherit"><Link style={{color:"white"}} to="/signup">Signup</Link></Button>
            </Toolbar>
        </AppBar>

        <Switch>

          <Route exact path="/">
            <h1>Welcome !</h1>
          </Route>

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/signup">
            <h1>Multi Step Form</h1>
            <Stepper />
          </Route>

        </Switch>


        </div>
    </Router>
  );
}
