import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    border: '2px solid #888bb4',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography style={{ fontFamily: 'Exo' }}>
            Why deliverables this vendor is incompetent?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontFamily: 'Exo' }}>
            Praesent vitae tellus nibh. Suspendisse potenti. Suspendisse
            condimentum, lorem in hendrerit faucibus, neque diam blandit nisl,
            nec bibendum enim tortor sit amet mi. Quisque nunc sapien, vehicula
            non dictum eget, mattis sit amet enim. Donec sit amet volutpat odio.
            Sed massa est, pulvinar et venenatis commodo.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography style={{ fontFamily: 'Exo' }}>
            Get all your ducks in a row proceduralize?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontFamily: 'Exo' }}>
            Praesent vitae tellus nibh. Suspendisse potenti. Suspendisse
            condimentum, lorem in hendrerit faucibus, neque diam blandit nisl,
            nec bibendum enim tortor sit amet mi. Quisque nunc sapien, vehicula
            non dictum eget, mattis sit amet enim. Donec sit amet volutpat odio.
            Sed massa est, pulvinar et venenatis commodo.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography style={{ fontFamily: 'Exo' }}>
            We need to dialog around your choice of work attire?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography style={{ fontFamily: 'Exo' }}>
            Praesent vitae tellus nibh. Suspendisse potenti. Suspendisse
            condimentum, lorem in hendrerit faucibus, neque diam blandit nisl,
            nec bibendum enim tortor sit amet mi. Quisque nunc sapien, vehicula
            non dictum eget, mattis sit amet enim. Donec sit amet volutpat odio.
            Sed massa est, pulvinar et venenatis commodo.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
