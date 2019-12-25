import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LineChart from './LineChart';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgb(2, 2, 2)',
    color: 'rgb(212, 54, 18)',
    fontSize: '17px'
  },
  body: {
    fontSize: 15
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '0px',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
    backgroundColor: 'rgb(7, 13, 17)'
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgb(0, 3, 10)'
    }
  },
  TableText: {
    fontFamily: 'Exo',
    color: '#fff'
  }
});

let id = 0;
function createData(name, currency, total, raise, percentage) {
  id += 1;
  return { id, name, currency, total, raise, percentage };
}

const rows = [
  createData(
    'BTC/USDT',
    (10154.37999999).toFixed(2),
    (277.00045718).toFixed(2),
    <LineChart />,
    -0.2
  ),
  createData(
    'ETH/USDT',
    (211.39).toFixed(2),
    (816.77238465).toFixed(2),
    <LineChart />,
    -2.34
  ),
  createData(
    'ETH/BTC',
    (0.018).toFixed(2),
    (233).toFixed(2),
    <LineChart />,
    +1.34
  ),
  createData(
    'XRP/USDT',
    (0.39).toFixed(2),
    (38238465).toFixed(2),
    <LineChart />,
    +1.33
  ),
    createData(
      'ZIL/ETH',
      (0.012).toFixed(2),
      (11816.77238465).toFixed(2),
      <LineChart />,
      +2.34
    ),
    createData(
      'NEO/BTC',
      (0.0015).toFixed(2),
      (2339).toFixed(2),
      <LineChart />,
      +4.34
    ),
    createData(
      'BCH/USDT',
      (768.88).toFixed(4),
      (3823).toFixed(6),
      <LineChart />,
      +1.11
    )
];

function CurrencyTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell className={classes.TableText}>
              {' '}
              Market{' '}
            </CustomTableCell>
            <CustomTableCell align="center" className={classes.TableText}>
              Last Price
            </CustomTableCell>
            <CustomTableCell align="center" className={classes.TableText}>
              Volume
            </CustomTableCell>
            <CustomTableCell align="center" className={classes.TableText}>
              Chart
            </CustomTableCell>
            <CustomTableCell align="center" className={classes.TableText}>
              Change
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell
                component="th"
                scope="row"
                className={classes.TableText}
              >
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="center" className={classes.TableText}>
                {row.currency}
              </CustomTableCell>
              <CustomTableCell
                align="center"
                style={{ color: '#23cc89', fontFamily: 'Exo' }}
              >
                {row.total}
              </CustomTableCell>
              <CustomTableCell align="center" className={classes.TableText}>
                {row.raise}
              </CustomTableCell>
              <CustomTableCell
                align="center"
                style={{ color: '#f76956', fontFamily: 'Exo' }}
              >
                {row.percentage} %
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CurrencyTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrencyTable);
