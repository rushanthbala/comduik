import React, { Component } from 'react';
import InsightsDistrictCard from '../components/layouts/InsightsDistrictCard';
// import RightSideImage from '../../components/layouts/RightSideImage';
// import globalNetworkImage from '../../assets/images/chaptertwo.svg';
import { withStyles } from '@material-ui/styles';
import archive from '../assets/icons/archive.svg'
import {Grid,Paper, Typography } from '@material-ui/core';
// import Chip from '@material-ui/core/Chip';

const styles = (theme) => ({
  logo: {
    width: '159px',
    height: '38px',
    border: '0',
    marginBottom: '50px',
  },
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

class PaperSetup extends Component {
  
  render() {
    return (
     
      <React.Fragment>
          <Grid>
            {/* <Chip  color="primary"/> */}
            <Typography> 
            Find insights in the district level
            </Typography>
            <Typography>
            Datasets organized in district level.
            </Typography>

          </Grid>
          <Grid container spacing={2} justify='center' >
          <Grid item xs={3}>
        <Paper>
        <InsightsDistrictCard
        // image={globalNetworkImage}
        title="District population"
        text="This should be used to tell
         a story and let your users know more about your service. How can you benefit them?"
         image={archive}
         no="1"
      >
      </InsightsDistrictCard>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
        <InsightsDistrictCard
        // image={globalNetworkImage}
        title="District population"
        text="This should be used to tell
         a story and let your users know more about your service. How can you benefit them?"
         image={archive}
         no="3"
      >
      </InsightsDistrictCard> 
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
        <InsightsDistrictCard
        // image={globalNetworkImage}
        title="District population"
        text="This should be used to tell
         a story and let your users know more about your service. How can you benefit them?"
         image={archive}
         no="1"
      >
      </InsightsDistrictCard>
        </Paper>
      </Grid>
          </Grid>
     </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaperSetup);

