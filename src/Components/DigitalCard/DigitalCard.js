import React from 'react';
import icon1 from '../../Assets/icons/contract.svg';
import icon2 from '../../Assets/icons/secure.svg';
import icon3 from '../../Assets/icons/24-7-hr.svg';
import Fade from 'react-reveal/Fade';
function DigitalCard() {
  return (
    <div style={{ marginBottom: '15px', marginTop: '50px' }}>
      <div className="grid-row">
        <Fade duration={500}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon1} alt="icon" width="64px" height="64px"/>
              <h3 style={{ fontFamily: 'Exo' }}> Quicker than Most </h3>
              <p style={{ fontFamily: 'Exo' }}>
                QuantaEx has one of the world 's fastest trade engine that'
                s capable of over 50, 000 transactions every second.
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={1000} delay={200}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon2} alt="icon2" width="64px" height="64px"/>
              <h3 style={{ fontFamily: 'Exo' }}> Custody Protection Guaranteed </h3>
              <p style={{ fontFamily: 'Exo' }}>
                Asset funds are kept in our cold storage custody solution preventing any malicious hacks.
              </p>
            </div>
          </div>
        </Fade>
        <Fade duration={2000} delay={400}>
          {' '}
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon3} alt="icon3" width="64px" height="64px"/>
              <h3 style={{ fontFamily: 'Exo' }}>
                24/7 Access
              </h3>
              <p style={{ fontFamily: 'Exo' }}>
                Reliable 100 % up - time with around the clock account access to all asset trading and balances
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default DigitalCard;
