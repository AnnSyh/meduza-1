import React from 'react';
import radarChart from "react-svg-radar-chart";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import './styles/Health.css';

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// данные для кнопок (варианты ответов навопросы)
const BootstrapButton = withStyles({
  root: {
    fontSize: 42,
    fontWeight: 'bold',
    border: '1px solid',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: '#ffffff',
    color: '#215C75',
    width: '100%',
    height: '231px',
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


// данные для круговоой диаграммы
const data = [
  { battery1: 0.7, design1: 1, useful1: 0.9, speed1: 0.67, weight1: 0.8 },
  // { battery: 0.6, design: 0.9, useful: 0.8, speed: 0.7, weight: 0.6 }
];
const chartSize = 450;
const numberOfScales = 4;
const scale = value => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="#FAFAFA"
    stroke="#999"
    strokeWidth="0.2"
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
      stroke={`#edc951`}
      fill={`#edc951`}
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
    stroke="#555"
    strokeWidth=".2"
  />
);
const caption = () => col => (
  <text
    key={`caption-of-${col.key}`}
    x={polarToX(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
    y={polarToY(col.angle, (chartSize / 2) * 0.95).toFixed(4)}
    dy={10 / 2}
    fill="red"
    fontWeight="400"
    textShadow="1px 1px 0 #fff"
  >
    {col.key}
  </text>
);

// -------------------------------

const FamilyFreands = props => {
  // форма
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./family-freands");
    reset();
  };

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
  groups.push(<g key={`group-axes`}>{columns.map(axis())}</g>);
  groups.push(<g key={`groups}`}>{data.map(shape(columns))}</g>);

  groups.push(<g key={`group-captions`}>{columns.map(caption())}</g>);


  return (
    <Container className='container__form-question'>
      <h1>FamilyFreands</h1>
      <form
              className='form-question'
              onSubmit={handleSubmit(onSubmit)}
      >



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
