import React from 'react';
import { Link } from "react-router-dom";

import '../scss/style.css';
import classes from './Health.module.css';

import CareerIcon from './../../images/interviewIcons/career.svg';
import FriendImg from './../../images/health-content.png';

import Grid from '@material-ui/core/Grid';

import TextBlock from "./TextBlock";


const Career = props => {

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Grid item className="hidden-xs" md={3}>
          <img className={classes.img} src={FriendImg} alt="" />
        </Grid>
        <Grid item sm={12} md={9}>
          <div className={classes.info}>
            <div className={classes.title}>
              <img className={classes.titleIcon} src={CareerIcon} alt='' />
              <h2>Career &gt;</h2>
            </div>
            <TextBlock />

            <div className='text-two-col'>
              <div className='text-col'>
                <h3>Start with the basics:</h3>
                <ul className="blue-dot">
                  <li>Are there any health issues you </li>
                  <li>Need to attend to? </li>
                  <li>Do you eat healthily? </li>
                  <li>Do you exercise enough? </li>
                  <li>How is your sleep? </li>
                  <li>Are you emotionally stable? </li>
                </ul>
                <p>
                  Small tweaks to your diet and exercise routine might make an enormous difference.
                </p>
              </div>
              <div className='text-col'>
                <h3>Look at a bigger picture</h3>
                <p>
                  If you eat well, exercise and don’t have any chronic illnesses, but are still not satisfied with your health, you might need to take an honest look at your life.
                </p>
                <ul className="blue-dot">
                  <li>Are there any health issues you </li>
                  <li>Need to attend to? </li>
                  <li>Do you eat healthily? </li>
                  <li>Do you exercise enough? </li>
                  <li>How is your sleep? </li>
                  <li>Are you emotionally stable? </li>
                </ul>
              </div>
            </div>
            <p>
              Often, health-related symptoms occur when we ignore our inner voice. Sometimes we need time to realise that something isn’t serving us anymore, find courage to make the change or simply don’t know where to start.
            </p>
            <p>
              All of that is ok, because that’s exactly why we have created Life Strategy Quest — to help you find clarity and realign with your essence.
            </p>
            <Link to='/strategy-quest' type="submit" className="btn-round-blue btn-round-blue--link btn-right">
              Embark On a Quest
            </Link>

          </div>
        </Grid>
      </Grid>


    </div>
  );
};

export default Career;
