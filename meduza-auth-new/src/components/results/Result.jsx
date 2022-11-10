import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';
import classes from './Result.module.css';

import imgDownload from '../../images/Download.svg';
import imgShare from '../../images/Share.svg';
import imgPrint from '../../images/Print.svg';
// ------------------------------------------------

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

const Result = props => {
  // const classesPage = useStyles();

  const { state } = useStateMachine(updateAction);

  // данные для круговоой диаграммы
  const data = [
    {
      Health: (state.data.health / 10),
      friend: (state.data.friend / 10),
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
          Congratulations, {state.data.name}! Your wheel is nice and round, with all areas of your life in balance.
        </p>
        <p>
          Most people struggle to maintain such balance, which is completely normal. While you are in a great place, think about what helped you to achieve that.
        </p>
        <p>
          You might draw some useful insights for the future you, in case something goes out of balance.
        </p>
        <h3>Recommendation</h3>
        <p>
          While you are in a good place right now, we recommend checking in with yourself regularly to see if anything needs re-calibrating. You can come back to this tool and do the test again, or simply do a mental check-in.
        </p>
        <p>
          {state.data.name}, you strike me as a person who likes to grow and improve, and probably wondering, how can you make your scores even higher? The best way to do it is by mindfully and intentionally designing your life.
        </p>
        <p>
          Don’t worry, we have designed a powerful tool to help you do that — Life Strategy Quest. It is an interactive online quest to help you understand yourself even better and gain clarity of thought in a simple and structured way.
        </p>
        <h3>Your next step</h3>
        <p>
          {state.data.name}, you took the assessment, which was the first step of your journey. In the next step, you will define your personal values, which are the foundation for designing life on your terms.
        </p>
      </>
    )
  }

//   var pathToFile = "....";
//   downloadFile(file) {
//     location.href = pathToFile + file;
// }

  const WeelListIcon = (props) => {
    return (
      <List className={classes.radarIcons}>
        {/* <ListItem>
          <a className='radar-icon__link' href='http://localhost:4444/static/media/Download.ebe3e41ea8d01502009fd3355d5d3bbd.svg' download>
            Скачать
            </a>
        </ListItem> */}
        {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}
        <ListItem>
          <Link className='radar-icon__link' to='/' ><img src={imgDownload} alt="" /></Link>
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
          <h1 className={classes.h1Color}> {state.data.name}’s Wheel of Life</h1>
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
        <Link to='/your-priorities' type="submit" className="btn-big-round-blue btn-big-round-blue--link">
          Let’s do it!
        </Link>
      </div>
    </div>
  );
};

export default Result;
