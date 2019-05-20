import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Fab
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// redux
import { connect } from 'react-redux';
import * as actions from '../../actions/counter';

const styles = theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class Counter extends React.Component {
  render() {
    const { classes, number, increment, decrement } = this.props;
    return (
      <React.Fragment>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={increment}>
          <AddIcon />
        </Fab>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={decrement}>
          <RemoveIcon />
        </Fab>
        <Badge badgeContent={number} color="primary" classes={{ badge: classes.badge }}>
          <ShoppingCartIcon />
        </Badge>
      </React.Fragment>
    )
  }
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Counter));