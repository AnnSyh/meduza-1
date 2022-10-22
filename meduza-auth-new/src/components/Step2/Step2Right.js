import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import data from "../../data";

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

const Step2Right = (props) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      radio: "",
    }
  });

  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    console.log('сабмит формы!!!!');
    actions.updateAction(data);
    // props.history.push("./step3");
    props.history.push("./result");
    alert(JSON.stringify(data));
    reset();
  };

  function handleCardClick(e) {
    const age = e.target.value

    actions.updateAction(age);
  }



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

        <div className=''>


        <input {...register("radio")} type="radio" value="16-24" />
      <input {...register("radio")} type="radio" value="25-34" />
      <input {...register("radio")} type="radio" value="35-44" />
      <input {...register("radio")} type="radio" value="45 +" />

          {/* <input   defaultValue={state.data.age} {...register("age")}/>
          <input   defaultValue={state.data.age} {...register("age")}/>
          <input   defaultValue={state.data.age} {...register("age")}/>
          <input   defaultValue={state.data.age} {...register("age")}/> */}

          {/* 16-24
          </BootstrapButton> */}
          {/* <BootstrapButton  {...register("radio")} type="submit">
            25-34
          </BootstrapButton>
          <BootstrapButton  {...register("radio")} type="submit">
            35-44
          </BootstrapButton>
          <BootstrapButton  {...register("radio")} type="submit">
            45 +
          </BootstrapButton> */}
        </div>

        <input type="submit" />

      </form>
    </Container>
  );
};

export default withRouter(Step2Right);
