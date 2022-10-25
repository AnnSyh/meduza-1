import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import styles from './Step4Email.module.css';

import Container from '@material-ui/core/Container';

const Step4Email = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    actions.updateAction(data);
    // await login(data.email);
    props.history.push("./password");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });

  return (
    <Container 
    className={'container__form-img ' + styles.formImg}
    >
      <div style={{marginTop: '310px'}}>
        <h1>
          Great job, {state.data.name}!<br />
          How can we stay in touch?
        </h1>
        <div className="lid">We will send you your Wheel of Life results in case you want to come back to it.</div>
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
                id="email"
                defaultValue={state.data.email}
                aria-invalid={errors.email ? "true" : "false"}
                style={{ marginBottom: '0' }}
                {...register("email", {
                  required: 'Required field',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
                type="email"
                placeholder="example@mail.com"
              />
            </label>

            <div style={{ display: "flex", justifyContent: 'space-between', marginTop: '20px' }}>
              <label className="checkbox-text">
                <input
                  name="subscribe"
                  type="checkbox" {...register("subscribe")}
                  id="subscribe"
                />
                Subscribe to our newsletter
              </label>
              <div style1={{ height: 10 }}>
                {errors?.email && <span className='error' >{errors?.email?.message || 'Error!'}</span>}
              </div>

            </div>
          </div>

          <input className="btn-big-round"  type="submit" value='' />
        </form>
      </div>

    </Container>
  );
};

export default withRouter(Step4Email);
