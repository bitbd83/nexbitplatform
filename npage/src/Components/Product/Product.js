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
import Product1 from '../../Assets/qx-lending.png';
import Product2 from '../../Assets/qx-pro.png';
import Product3 from '../../Assets/qx-ieo.png';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
const styles = theme => ({
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  listItem: {

    '&:hover': {
      background: 'transparent'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: '10px'
  },
  SubTitle: {
    fontSize: '14px',
    fontWeight: 'normal',
    marginLeft: '5px',
    fontFamily: 'Exo'
  },
  ProductPaper: {
    width: '900px',
    marginTop: '19px',
    padding: '25px',
    height: '100px',
    zIndex: '99'
  }
});

class Product extends React.Component {
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
          className={classes.mobile}
          style={{
            margin: '5px',
            color: '#000',
            opacity: '0.5',
            fontWeight: 'bold',
            fontSize: '15px',
            fontFamily: 'Exo'
          }}
        >
          Products{' '}
          <i
            className="fas fa-angle-down"
            style={{
              marginLeft: '2.5px'
            }}
          />
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
              <Paper className={classes.ProductPaper}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <div>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <MenuList>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.listItem}
                        >
                          <div>
                            <img
                              src={Product1}
                              alt="product1"
                              height="35px"
                              width="130px"
                            />
                            <br />
                            <p className={classes.SubTitle}>
                              Buy, Sell and Manage Digital Assests
                            </p>
                          </div>
                        </MenuItem>
                      </MenuList>
                      <MenuList>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.listItem}
                        >
                          <div>
                            <img
                              src={Product2}
                              alt="product2"
                              height="35px"
                              width="130px"
                            />
                            <br />
                            <p className={classes.SubTitle}>
                              Trading Platform for profile Traders
                            </p>
                          </div>
                        </MenuItem>
                      </MenuList>
                      <MenuList>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.listItem}
                        >
                          <div>
                            <img
                              src={Product3}
                              alt="product3"
                              height="35px"
                              width="130px"
                            />
                            <br />
                            <p className={classes.SubTitle}>
                              Buy the Pro Project Coins
                            </p>
                          </div>
                        </MenuItem>
                      </MenuList>
                    </Grid>
                  </div>
                </ClickAwayListener>
                <Divider />

              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
