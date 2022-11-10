import React from 'react';

import '../scss/style.css';
import classes from './Health.module.css';

// import healthIcon from './../../images/Health.svg';
import healthIcon from './../../images/interviewIcons/health.svg';
import healthImg from './../../images/health-content.png';

import Grid from '@material-ui/core/Grid';

import TextBlock from "./TextBlock";


const Health = props => {

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item xs={3}>

            <img className={classes.img} src={healthImg} alt="" />

        </Grid>
        <Grid item xs={9}>

            <div className={classes.info}>
              <div className={classes.title}>
                <img className={classes.titleIcon} src={healthIcon} alt='' />
                <h2>Health &gt;</h2>
              </div>
              <TextBlock />

            </div>

        </Grid>
      </Grid>


    </div>
  );
};

export default Health;
