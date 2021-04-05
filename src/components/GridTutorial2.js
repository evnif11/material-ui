import React, { Component } from 'react';
import { withStyles }from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root:{
    padding: theme.spacing(3),
    background: '#eeee11'
  },
  paper:{
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary
  },
});

class GridTutorial2 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 1</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 2</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 3</Paper>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.paper}>Content 4</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GridTutorial2);
