import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Particles from 'react-particles-js';
import { Button } from '@material-ui/core';
import Phone1 from '../../../Assets/ellada/phone-1.png';
import Phone2 from '../../../Assets/ellada/phone-2.png';
import { Animated } from 'react-animated-css';

const styles = theme => ({
  BlockChain: {
    height: '600px',
    marginTop: '0px',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
      height: '380px'
    }
  },
  BlockChainHeader: {
    fontSize: '75px',
    fontWeight: 'bold',
    fontFamily: 'Exo',
    opacity: '0.9',
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      marginTop: '80px'
    }
  },
  BlockChainText: {
    fontSize: '18px',
    opacity: '0.9',
    marginRight: '110px',
    fontFamily: 'Exo'
  },
  LeftSection: {
    marginTop: '-220px',
    marginLeft: '80px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px'
    }
  },
  JoinPresale: {
    backgroundImage:
      'linear-gradient(to right,  #3a5aff, #0071ff, #0084ff, #0095ff, #0aa4f9 )',
    fontWeight: '700',
    textDecoration: 'none',
    outline: 'none',
    transition: '0.2s',
    borderRadius: '50px',
    boxShadow: 'none',
    textShadow: 'none',
    zIndex: '1',
    lineHeight: '1',
    color: '#ffffff',
    padding: '0.650rem 3.35rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    fontFamily: 'Exo'
  },
  ImageContainer: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  img1: {
    marginTop: '-260px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  img2: {
    position: 'absolute',
    left: '150px',
    top: '50px',
    zIndex: '-1',
    marginTop: '-260px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
});

class BlockChain extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classes.BlockChain}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                  },
                  color: { value: '#00e0ca' },
                  shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#000000' },
                    polygon: { nb_sides: 1 },
                    image: { src: 'img/github.svg', width: 100, height: 100 }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 10,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                  }
                },
                interactivity: {
                  detect_on: 'canvas',
                  events: {
                    resize: true
                  },
                  modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    }
                  }
                }
              }}
              style={{
                width: '100%'
              }}
            />
            <section className={classes.LeftSection}>
              <h1 className={classes.BlockChainHeader}>
                Blockchain brigns out the best.
              </h1>
              <p className={classes.BlockChainText}>
                Best practices on-brand but completeley fresh, drink the
                Kool-aid, but Bob called an all-hands this afternoon can we take
                this offline.
              </p>
              <Button className={classes.JoinPresale}> Join Presale</Button>
            </section>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                  },
                  color: { value: '#00e0ca' },
                  shape: {
                    type: 'circle',
                    stroke: { width: 0, color: '#000000' },
                    polygon: { nb_sides: 1 },
                    image: { src: 'img/github.svg', width: 100, height: 100 }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 10,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                  }
                },
                interactivity: {
                  detect_on: 'canvas',
                  events: {
                    resize: true
                  },
                  modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3
                    }
                  }
                }
              }}
              style={{
                width: '100%'
              }}
            />
            <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              animationInDuration={2000}
              animationOutDuration={1000}
              isVisible={true}
            >
              {' '}
              <div className={classes.ImageContainer}>
                <Animated
                  animationIn="slideInUp"
                  animationOut="fadeOut"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <img
                    src={Phone1}
                    className={classes.img1}
                    alt="phone1"
                    height="570px"
                  />
                </Animated>
                <img
                  src={Phone2}
                  className={classes.img2}
                  alt="phone2"
                  height="470px"
                />
              </div>
            </Animated>
          </Grid>
        </Grid>
      </section>
    );
  }
}
export default withStyles(styles)(BlockChain);
