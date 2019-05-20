import React from 'react';
// import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Grid } from '@material-ui/core';

// components
import Header from '../components/Header/Header';

const styles = theme => ({
  sppBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>About</Typography>
                <Typography variant="body2">
                  about page
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(About);