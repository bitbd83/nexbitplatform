import React from 'react';
import Ticker from 'react-ticker';

const News = () => (
  <Ticker speed={10} mode="smooth">
    {() => (
      <>
        <div
          style={{
            height: '20px',
            color: '#6c7d9e',
            fontFamily: 'Rajdhani',
            fontWeight: '600'
          }}
        >
          Lates News about cryptocurrency. Next Big thing : Stablecoin promise
          steady crypto inflow
        </div>
      </>
    )}
  </Ticker>
);

export default News;
