import React from 'react';
import { Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
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
    'September'
  ],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.3,
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
      borderWidth: 0.9,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 85, 60, 65, 70]
    }
  ]
};

class LineChart extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <div style={{ width: '150px', height: '62px' }}>
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
      </Grid>
    );
  }
}

export default LineChart;
