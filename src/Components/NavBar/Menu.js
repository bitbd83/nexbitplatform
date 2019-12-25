import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  mobile: {
    [theme.breakpoints.down('md')]: {
      marginRight: '30px',
      fontSize: '30px'
    }
  },
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: '10px'
  }
});

class MenuListComposition extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MenuIcon className={classes.mobile} />
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper
                style={{
                  width: '150px',
                  marginRight: '25px',
                  marginTop: '20px',
                  color: '#fff',
                  backgroundColor: 'rgb(17, 16, 35)'
                }}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <a
                      href="https://pro.quantaex.com/trading/btcusdt"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <MenuItem
                        onClick={this.handleClose}
                        style={{ fontFamily: 'Exo' }}
                      >
                        Market
                      </MenuItem>
                    </a>
                    <MenuItem
                      onClick={this.handleClose}
                      style={{ fontFamily: 'Exo' }}
                    >
                      News
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      style={{ fontFamily: 'Exo' }}
                    >
                      Support
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
