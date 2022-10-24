import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step5Password = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    console.log('onSubmit');

    actions.updateAction(data);
    props.history.push("./based-city");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });

  return (
    <Container className='container__form-img container__form-img--left'>
      <h1>
        Thanks, {state.data.name}!<br />
        Please create a 52 character password
      </h1>
      <div className="lid">He-he, just kidding! A simple 7-character password would do, or you can sign-in with Google if you like. It will help us save your progress!</div>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form-img'
        noValidate
        autoComplete='off'
      >
        <div className="form-inner">
          <label>
            <input
              id="password"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", {
                required: "required",
                minLength: {
                  value: 7,
                  message: "min length is 7"
                }
              })}
              type="password"
              placeholder="password"
            />
            {errors?.password && <span className='error' >{errors?.password?.message || 'Error!'}</span>}

          </label>
        </div>

        <input className="input" type="submit" value='' />
      </form>

    </Container>
  );
};

export default withRouter(Step5Password);
