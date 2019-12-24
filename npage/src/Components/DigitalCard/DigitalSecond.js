import React from 'react';
import icon4 from '../../Assets/icons/icon4.png';
import icon5 from '../../Assets/icons/icon5.png';
import icon6 from '../../Assets/icons/icon6.png';
import Fade from 'react-reveal/Fade';
function DigitalCard() {
  return (
    <div>
      <div className="grid-row">
        <Fade duration={2500} delay={600}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon4} alt="icon4" />
              <h3 style={{ fontFamily: 'Exo' }}>Secure storage</h3>
              <p style={{ fontFamily: 'Exo' }}>
                The world's leading cryptocurrency trading platform.
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={3000} delay={800}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon5} alt="icon" />
              <h3 style={{ fontFamily: 'Exo' }}>Secure storage</h3>
              <p style={{ fontFamily: 'Exo' }}>
                The world's leading cryptocurrency trading platform.
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={3500} delay={1000}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon6} alt="icon" />
              <h3 style={{ fontFamily: 'Exo' }}>Secure storage</h3>
              <p style={{ fontFamily: 'Exo' }}>
                The world's leading cryptocurrency trading platform.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default DigitalCard;
