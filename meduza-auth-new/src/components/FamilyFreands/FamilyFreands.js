import React from 'react';
// import radarChart from "react-svg-radar-chart";
import { useForm } from "react-hook-form";
// import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
// import updateAction from "../updateAction";
import updateAction from "../updateAction";

import './../styles/Health.css';

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import healthIcon from './../images/Health.svg';
import friendImg from './../../images/Friend.svg';
// import IconFamilyFreands from './icons/IconFamilyFreands';

// данные для кнопок (варианты ответов на вопросы)
const BootstrapButton = withStyles({
  root: {
    fontSize: 32,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid green',
    borderColor: '#ffffff',
    color: '#215C75',
    width: '100%',
    margin: '0',
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, calc(100% / 10 - 8px))',
    gap: '12px',
    alignItems: 'center',
    maxWidth: '640px',
    margin: 'auto auto 80px auto',
    '& > *': {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
    }
  },
}));


// const keyHealthIcon=`${healthIcon}`

// данные для круговоой диаграммы
const data = [
  { Health: 0.7, friend: 0.5, love: 0, money: 0, fun: 0,  career: 0, growth: 0 },
];
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

const FamilyFreands = props => {
  // форма
  const {
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./family-friends-rez");
    reset();
  };

  const classes = useStyles();

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

  return (
    <Container className='healthContainer container__form-question'>
      <img className='logo-img' src={friendImg} alt='' />
      <h1>Family & Friends</h1>
      <p>How satisfied are you with your social life?</p>
      <form
        className='form-question'
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* //кнопки */}
        <div className="health-buttons">
          <div className={classes.root}>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-1" data-text='Does my cat count?'>
              1
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-2" >
              2
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-3" >
              3
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-4" >
              4
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-5" >
              5
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-1" >
              6
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-2" >
              7
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-3" >
              8
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-4" >
              9
            </BootstrapButton>
            <BootstrapButton defaultValue={state.data.age} type="submit" id="age-5" data-text='Great Gatsby would be jealous'>
              10
            </BootstrapButton>
          </div>
        </div>
        {/* // диаграма */}
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          width={chartSize}
          height={chartSize}
          viewBox={`0 0 ${chartSize} ${chartSize}`}
        >
          <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
        </svg>
      </form>

    </Container>
  );
};

export default FamilyFreands;
