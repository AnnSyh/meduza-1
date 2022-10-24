import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step4Email = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    // props.history.push("./Step5Thanks");
    // alert(JSON.stringify(data));
    reset();
  };

  return (
    <Container className='container__form-img container__form-img--left'>
      <h1>Great job, [NAME]!</h1>
      <h1>How can we stay in touch?</h1>
      <div className="lid">
        We will send you your Wheel of Life results in case you want to come back to it.
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form-img'
        noValidate
        autoComplete='off'
      >
        <label>
          <input
            placeholder='email'
            defaultValue={state.data.email}
            {...register("email", {
              required: 'Поле обязательнок заполнению',
              minLength: {
                value: 5,
                message: 'мин кол-во символов 5'
              }
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.email && <span className='error' >{errors?.name?.message || 'Error!'}</span>}
        </div>
        <input type="checkbox">
          Subscribe to our newsletter
        </input>

        <input className="input" type="submit" value='' />
      </form>
    </Container>
  );
};

export default withRouter(Step4Email);
