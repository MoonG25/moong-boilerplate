import React from 'react';
// import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Grid } from '@material-ui/core';

// redux 
import { connect } from 'react-redux';

// components
import Header from '../components/Header/Header';
import Counter from '../components/Counter/Counter';

const styles = theme => ({
  sppBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
});

class Home extends React.Component {
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
                <Typography variant="h6" gutterBottom>Home</Typography>
                <Typography variant="body2">
                  Welcome to STO Platform {this.props.counter.number}
                </Typography>
                <Counter /> 
              </Grid>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));