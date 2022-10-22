
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

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
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    
    reset();
    actions.updateAction(data);
    // alert(JSON.stringify(data));
    // alert(JSON.stringify(props));
    // alert(JSON.stringify(props.history));
    // props.history.push("./step3");
    props.history.push("./result");
    reset();
  };

  const onClick = (e, data) => {
    const clickForm = e.target.parentNode.closest('form');
    console.log('clickForm.getAttribut("data-form") = ', clickForm.getAttribute('data-form'));
    alert(JSON.stringify(data));
  };
// debugger
  // console.log('props.name = ',props.name);


  const classes = useStyles();

  return (
    <Container className='container__form-img container__form-img--right'>

      <h1>
        That’s a beautiful name, {state.data.firstName}!<br />
        I am [GUIDE]. How old are you?
      </h1>
      <div
        className='form-img'
      >

        <div className={classes.root}>

          <form
            data-form='age-1'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <BootstrapButton
              type="submit"
            >
              16-24
            </BootstrapButton>
          </form>
          <form
            data-form='age-2'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <BootstrapButton
              type="submit"
            >
              25-34
            </BootstrapButton>
          </form>

          <form
            data-form='age-3'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <BootstrapButton
              type="submit"
            >
              35-44
            </BootstrapButton>
          </form>
          <form
            data-form='age-4'
            onClick={onClick}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <BootstrapButton
              type="submit"
            >
              45 +
            </BootstrapButton>
          </form>

        </div>

      </div>
    </Container>
  );
};

export default withRouter(Step2);
