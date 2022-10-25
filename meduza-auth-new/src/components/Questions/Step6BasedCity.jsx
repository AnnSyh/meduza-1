import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step6BasedCity = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    actions.updateAction(data);
    props.history.push("./ready-see-rezalts");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });

  return (
    <Container className='container__form-img container__form-img--left'>
      <div>
        <h1>
          Great! I won’t tell anyone.<br />
          By the way, where are you based, {state.data.name}?
        </h1>
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
                type="text"
                placeholder="City"
                id="city"
                defaultValue={state.data.city}
                aria-invalid={errors.city ? "true" : "false"}
                {...register("city", {
                  required: 'Required field',
                  pattern: {
                    value: /^[A-zА-яЁё]+$/,
                    message: "Entered value does not match city format"
                  }
                })}
              />
            </label>
            <div style={{ height: 10 }}>
              {errors?.city && <span className='error' >{errors?.city?.message || 'Error!'}</span>}
            </div>
          </div>

          <input className="btn-big-round" type="submit" value='' />
        </form>
      </div>

    </Container>
  );
};

export default withRouter(Step6BasedCity);
