import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

// import styles from './ByTheWay.module.css';

import Container from '@material-ui/core/Container';

const ByTheWay = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (data) => {
    actions.updateAction(data);

    props.history.push("./register");
    // props.history.push("./login");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });

  return (
    <Container
      // className={'container__form-img ' + styles.formImg}
      className='container__form-img'
    >
      <div className='form-img--wrapper' style={{marginTop: '310px'}}>
        <h1>
        By the way, <span className='username'>{state.data.name}</span>,<br />
        Where did you hear about us?
        </h1>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='form-img'
          noValidate
          autoComplete='off'
        >
          <div className="form-inner">
            <label>
              <textarea
                placeholder="Where did you hear about us?"
                id="aboutUs"
                defaultValue={state.data.aboutUs}
                aria-invalid={errors.aboutUs ? "true" : "false"}
                {...register("aboutUs", {
                  required: 'Required field',
                  pattern: {
                    value: /^[A-zА-яЁё]+$/,
                    message: "Entered value does not match aboutUs format"
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

export default withRouter(ByTheWay);
