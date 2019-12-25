import React from 'react';
import Chart from './Chart';
import { getData } from './Data';
import { Grid } from '@material-ui/core';

class StockChart extends React.Component {
  componentDidMount() {
    getData().then(data => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        style={{ marginTop: '70px' }}
      >
        <Chart data={this.state.data} />
      </Grid>
    );
  }
}

export default StockChart;
