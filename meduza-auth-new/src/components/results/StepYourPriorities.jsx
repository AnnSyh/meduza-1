import React from 'react';
import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import TextBlock from "./TextBlock";

import '../scss/style.css';
import classes from './StepYourPriorities.module.css';

import imgDownload from '../../images/Download.svg';
import imgShare from '../../images/Share.svg';
import imgPrint from '../../images/Print.svg';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Typography from '@material-ui/core/Typography';

// import careerImg from './../../images/Career.svg';
// import healthImg from './../../images/Health.svg';

import Health from './Health';


// ------------------------------------
const chartSize = 450;
// const chartSize = 250; -для экрана < 500px
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

const StepYourPriorities = (prop) => {
  // const classesPage = useStyles();

  const { state } = useStateMachine(updateAction);
  const interview = ["health", "friend", "love", "career", "money", "fun", "growth"];



  //выбрать данные из диаграммы с оценкой < 7
  function Less7() {
    const rez = [];
    const obj = state.data;

    console.log('obj = ', obj);

    function handleCardClick(e) {
      console.log('card click!!!!');

      console.log('e.target = ', e.target);

      const currentClass = e.target.getAttribute('class')
      const contentTabs = document.querySelectorAll('.detail__content');
      const tabs = document.querySelectorAll('.list-details li');

      const tabsDell = document.querySelectorAll('.list-details li:not([class])');
      console.log('tabsDell = ', tabsDell);

      contentTabs.forEach((item) => {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      });

      if (document.getElementById(currentClass)) {

        document.getElementById(currentClass).classList.remove('d-none');
        document.getElementById(currentClass).classList.add('d-block');

        tabs.forEach((item) => {
          item.style.display = "flex";
        });

        e.target.style.display = "none";

      } else {

        const parent = e.target.parentNode;
        const currentClass = parent.getAttribute('class');

        document.getElementById(currentClass).classList.remove('d-none');
        document.getElementById(currentClass).classList.add('d-block');

        tabs.forEach((item) => {
          item.style.display = "flex";
        });

        parent.style.display = "none";


      }

      // tabs.forEach((item) => {
      //   item.style.display = "flex";
      // });

      // e.target.style.display = "none";

    }

    for (let key in obj) {
      if (Number(obj[key]) < 7) {
        // console.log('interview.length = ', interview.length)
        // console.log('key = ', key)

        for (let i = 0; i < interview.length; i++) {
          // console.log('interview[i] = ', interview[i])
          // console.log('condition = ', (key === interview[i]))

          if (key === interview[i]) {
            console.log('key = ', key)
            rez.push(key)
          }
        }

      }
      console.log('Less7: rez = ', rez);
      console.log('Less7: rez.length = ', rez.length);
    }

    return (<div className='list-details'>
      <ul className={classes.less7Ul}>
        {rez.map((item, index) => (
          <li key={index} className={item} onClick={handleCardClick}>
            <span className={classes.detailTitle}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>)

  }

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
      <p className={classes.date}>Date: {Day}.{Month + 1}.{Year}</p>
    )
  }

  return (
    <div style={{ flexDirection: 'column' }}>
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
            <h1 className={classes.h1Color}>
              [NAME]’s Wheel of Life
              {/* Time to re-assess your priorities */}
            </h1>
            <CurentDate />
          </div>
          <WeelListIcon />
        </div>
        <div className='txt'>
          <div className={classes.root}>
            <Typography variant="h1" component="h2">
              Time to re-assess your priorities
            </Typography>
          </div>
          {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
          <TextBlock />
          <h3>Let’s look at each area in more detail</h3>
          <Less7 />
        </div>
      </div>

      <div id='health' className='detail__content content--health'>
        <Health />
      </div>
      <div id='friend' className='detail__content content--friend'>
        friend
      </div>
      <div id='love' className='detail__content content--love'>
        love
      </div>
      <div id='career' className='detail__content content--career'>
        career
      </div>
      <div id="money" className='detail__content content--money'>
        money
      </div>
      <div id="fun" className='detail__content content--fun'>
        Fun
      </div>
      <div id="growth" className='detail__content content--growth'>
        Growth
      </div>

    </div>
  );
};

export default StepYourPriorities;
