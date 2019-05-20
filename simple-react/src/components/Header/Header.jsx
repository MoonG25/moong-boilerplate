import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import {
  AccountCircle as AccountCircleIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Search as SearchIcon,
  MoreVert as MoreIcon,
} from '@material-ui/icons';
import { FormattedMessage } from 'react-intl';
import { ConnectedIntlConsumer } from '../../ConnectedIntlProvider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    pointerEvents: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    marginLeft: '33px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }

  _handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  _handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this._handleMobileMenuClose();
  };

  _handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  _handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  componentDidMount() {
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this._handleMenuClose}
      >
        <MenuItem onClick={this._handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this._handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this._handleMenuClose}
      >
        <MenuItem onClick={this._handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this._handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this._handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    )

    return (
      <ConnectedIntlConsumer>
        {
          ({switchLocale}) => (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    <FormattedMessage id="title" />
                  </Typography>

                  <div>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/about" className={classes.link}>About</Link>
                  </div>

                  <div className={classes.grow} />
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    />
                  </div>
                  <div className={classes.sectionDesktop}>
                    <IconButton color="inherit" onClick={() => switchLocale('en')}>
                      <span role="img" aria-label="img">🇺🇸</span>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => switchLocale('ko')}>
                      <span role="img" aria-label="img">🇰🇷</span>
                    </IconButton>
                    <IconButton color="inherit">
                      <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                      <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={this._handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircleIcon />
                    </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                    <IconButton aria-haspopup="true" onClick={this._handleMobileMenuOpen} color="inherit">
                      <MoreIcon />
                    </IconButton>
                  </div>
                </Toolbar>
              </AppBar>
              {renderMenu}
              {renderMobileMenu}
            </div>
          )
        }
      </ConnectedIntlConsumer>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);