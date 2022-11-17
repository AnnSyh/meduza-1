import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step1 = (props) => {
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
    // actions.updateAction(data);
    props.history.push("./Step2");
    reset();
  };

  return (
    <Container 
      className='container__form-img container__form-img--left'>

      <div className='form-img--wrapper' style={{paddingTop:'320px'}}>
        <h1>Hey, good looking, first things <br/>first, how should I call you?</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='form-img'
          noValidate
          autoComplete='off'
        >
          <label>
            <input
              type="text"
              placeholder='Name'
              defaultValue={state.data.name}
              {...register("name", {
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'min characters 5'
                }
              })}
            />
          </label>
          <div style={{ height: 10 }}>
            {errors?.name && <span className='error' >{errors?.name?.message || 'Error!'}</span>}
          </div>

          <input className="btn-big-round" type="submit" value='' />
        </form>
      </div>

    </Container>
  );
};

export default withRouter(Step1);
