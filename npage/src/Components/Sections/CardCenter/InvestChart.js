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
      lineTension: 0,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'square',
      borderDash: [],
      pointStyle: 'dash',
      borderDashOffset: '',
      borderJoinStyle: 'round',
      lineCap: 'square',
      pointRotation: '180',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0.8,
      pointRadius: 1,
      borderWidth: 1.5,
      pointHitRadius: 10,
      data: [55, 50, 50, 55, 55, 55, 60, 60, 60, 55, 55]
    }
  ]
};

class InvestChart extends React.Component {
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
                    stepSize: 5,
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

export default InvestChart;
