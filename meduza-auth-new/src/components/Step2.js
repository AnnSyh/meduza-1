import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, calc(100% / 2 - 8px))',
    gap: '12px',
    alignItems: 'center',
    maxWidth: '640px',
    '& > *': {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
    }
  },
}));

const Step2 = (props) => {
  const {
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./step3");
    reset();
  };

  const classes = useStyles();

  return (
    <Container className='container__form-img container__form-img--right'>

      <h1>
        That’s a beautiful name, {state.data.firstName}!<br />
        I am [GUIDE]. How old are you?
      </h1>
      <form
        className='form-img'
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className={classes.root}>
          <BootstrapButton defaultValue={state.data.age} type="submit" id="age-1" >
            16-24
          </BootstrapButton>
          <BootstrapButton defaultValue={state.data.age} type="submit" id="age-2" >
            25-34
          </BootstrapButton>
          <BootstrapButton defaultValue={state.data.age} type="submit" id="age-3" >
            35-44
          </BootstrapButton>
          <BootstrapButton defaultValue={state.data.age} type="submit" id="age-4" >
            45 +
          </BootstrapButton>
        </div>

      </form>
    </Container>
  );
};

export default withRouter(Step2);
