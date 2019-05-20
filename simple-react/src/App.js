import React from 'react';
import Routes from './routes';
import { withStyles } from '@material-ui/core/styles';

const style = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
})

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Routes />
      </div>
    )
  }
}

export default withStyles(style)(App);