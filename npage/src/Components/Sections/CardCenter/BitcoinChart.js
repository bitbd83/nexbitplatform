import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.8,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0.8,
      pointRadius: 0,
      borderWidth: 1.5,
      pointHitRadius: 10,
      data: [50, 55, 53, 55, 56, 55, 53, 56, 55, 57, 58]
    }
  ]
};

class BitcoinChart extends React.Component {
  render() {
    return (
      <div style={{ width: '150px', height: '60px', marginBottom: '10px' }}>
        <Line
          data={data}
          options={{
            responsive: true,

            maintainAspectRatio: true,
            legend: false,
            tooltips: {
              enabled: true
            },

            scales: {
              xAxes: [
                {
                  display: false,
                  ticks: {
                    stepSize: 15,
                    autoSkip: true,
                    maxTicksLimit: 10,
                    stacked: true
                  }
                }
              ],
              yAxes: [
                {
                  display: false
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default BitcoinChart;
