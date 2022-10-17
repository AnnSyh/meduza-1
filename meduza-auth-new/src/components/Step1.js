import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import Container from '@material-ui/core/Container';

const Step1 = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    console.log('onSubmit');
    actions.updateAction(data);
    props.history.push("./step2");
    // alert(JSON.stringify(data));
    reset();
  };

  return (
    <Container className='container__form-img container__form-img--left'>
      <h1>Hey, good looking, first things first, how should I call you?</h1>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='form-img'
      noValidate
      autoComplete='off'
      >
        <label>
          <input
            placeholder='Name'
            defaultValue={state.data.firstName}
            {...register("firstName", {
              required: 'Поле обязательнок заполнению',
              minLength: {
                value: 5,
                message: 'мин кол-во символов 5'
              }
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.firstName && <span className='error' >{errors?.firstName?.message || 'Error!'}</span>}
        </div>

        <input type="submit" value='' />
      </form>
    </Container>
  );
};

export default withRouter(Step1);