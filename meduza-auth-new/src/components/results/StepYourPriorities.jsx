import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';
import classes from './StepYourPriorities.modules.css';

import imgDownload from '../../images/Download.svg';
import imgShare from '../../images/Share.svg';
import imgPrint from '../../images/Print.svg';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Typography from '@material-ui/core/Typography';


// ------------------------------------
const chartSize = 450;
const numberOfScales = 10;
const scale = value => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="transparent"
    stroke="#fff"
    strokeWidth="1"
  />
);
const polarToX = (angle, distance) => Math.cos(angle - Math.PI / 2) * distance;
const polarToY = (angle, distance) => Math.sin(angle - Math.PI / 2) * distance;
const pathDefinition = points => {
  let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
  for (let i = 1; i < points.length; i++) {
    d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);
  }
  return d + 'z';
};
const shape = columns => (chartData, i) => {
  const data = chartData;
  return (
    <path
      key={`shape-${i}`}
      d={pathDefinition(
        columns.map(col => {
          const value = data[col.key];
          return [
            polarToX(col.angle, (value * chartSize) / 2),
            polarToY(col.angle, (value * chartSize) / 2)
          ];
        })
      )}
      stroke={`#ffffff`}
      fill={`rgba(255, 255, 255, 1)`}
      fillOpacity=".5"
    />
  );
};
const points = points => {
  return points
    .map(point => point[0].toFixed(4) + ',' + point[1].toFixed(4))
    .join(' ');
};
const axis = () => (col, i) => (
  <polyline
    key={`poly-axis-${i}`}
    points={points([
      [0, 0],
      [polarToX(col.angle, chartSize / 2), polarToY(col.angle, chartSize / 2)]
    ])}
    stroke="#fff"
    strokeWidth="2"
  />
);
const caption = () => col => (
  <text
    key={`caption-of-${col.key}`}
    x={polarToX(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
    y={polarToY(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
    dy={10 / 2}
    fill="#215C75"
    fontWeight="400"
  >
    {col.key}
  </text>
);
// -------------------------------

const StepYourPriorities = props => {
  // const classesPage = useStyles();


  const { state } = useStateMachine(updateAction);

  // данные для круговоой диаграммы
  const data = [
    {
      Health: (state.data.health / 10),
      friend: (state.data.freand / 10),
      love: (state.data.love / 10),
      career: (state.data.career / 10),
      money: (state.data.money / 10),
      fun: (state.data.fun / 10),
      growth: (state.data.growth / 10)
    },
  ];

  // круговая диаграмма
  const groups = [];
  const scales = [];
  for (let i = numberOfScales; i > 0; i--) {
    scales.push(scale(i));
  }
  groups.push(<g key={`scales`}>{scales}</g>);
  const middleOfChart = (chartSize / 2).toFixed(4);
  const captions = Object.keys(data[0]);
  const columns = captions.map((key, i, all) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / all.length
    };
  });
  groups.push(<g key={`group-axes`}>{columns.map(axis())}</g>); // лучи
  groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>); // выделенная область
  groups.push(<g key={`group-captions`}>{columns.map(caption())}</g>); // заголовки

  const TextBlock = () => {
    return (
      <>
        <p>
        {state.data.name}, let’s start by acknowledging what’s going right in your life. 
        It sounds like [AREA 1=SCORE 7+], [AREA 2=SCORE 7+], [AREA 1=SCORE 7+] have scored 
        quite high. You should give yourself credit.
        </p>
        <p>
        Most people struggle to maintain their life in balance at all times, so it’s completely normal that some areas of your life scored a little lower.
        </p>
        <p>
        The good news is that you now have clarity of what needs your attention. Sometimes we feel down or not quite fulfilled without even understanding what needs fixing. 
When you know what to focus on, it is a lot easier to fix it.
        </p>
        <h3>Let’s look at each area in more detail</h3>
        
      </>
    )
  }

  const WeelListIcon = (props) => {
    return (
      <List className={classes.radarIcons}>
        <ListItem>
          <Link className='radar-icon__link' to='/'><img src={imgDownload} alt="" /></Link>
        </ListItem>
        <ListItem>
          <Link className='radar-icon__link' to='/'><img src={imgShare} alt="" /></Link>
        </ListItem>
        <ListItem>
          <Link className='radar-icon__link' to='/'><img src={imgPrint} alt="" /></Link>
        </ListItem>
      </List>
    )
  }

  const CurentDate = (props) => {
    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    const Day = Data.getDate();

    return (
      <p className={classes.date}>Date: {Day}.{Month}.{Year}</p>
    )
  }

  return (
    <div className='container__two-columns'>

      <div className='img'>
        {/* // диаграма */}
        <div className='radar'>
          <svg
            version="1"
            xmlns="http://www.w3.org/2000/svg"
            width={chartSize}
            height={chartSize}
            viewBox={`0 0 ${chartSize} ${chartSize}`}
          >
            <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
          </svg>
        </div>
        <div className='radar-info'>
          <h1 className={classes.h1Color}> Time to re-assess your priorities</h1>
          <CurentDate />
        </div>
        <WeelListIcon />

      </div>

      <div className='txt'>
        <div className={classes.root}>
          <Typography variant="h1" component="h2">
            You are on the horse, keep it up!
          </Typography>
        </div>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <TextBlock />
        <Link to='/your-priorities-detail' type="submit" className="btn-big-round-blue btn-big-round-blue--link">
          Let’s do it!
        </Link>
      </div>
    </div>
  );
};

export default StepYourPriorities;
