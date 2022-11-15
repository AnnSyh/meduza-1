import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import styles from './Step5Password.module.css';

import Container from '@material-ui/core/Container';

const Step5Password = ({ props, handleRegister }) => {

  console.log('props = ', props);
  console.log('handleRegister = ', handleRegister);

  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log('onSubmit step5');
    actions.updateAction(data);

    // регистрация 
    // данные для регистрации: {state.data.name},{state.data.email},{state.data.password}
    console.log('{state.data.name} = ', state.data.name);
    console.log('{state.data.email} = ', state.data.email);
    console.log('{state.data.password} = ', state.data.password);

    function handleSubmit(e) {
      e.preventDefault();
      if (true) {
        handleRegister( state.data.name, state.data.email, state.data.password)
          .catch((e) => setMessage(e.message))
      }
    }


    // props.history.push("./based-city");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });

  return (
    <Container
      className={'container__form-img ' + styles.formImg}
    >
      <div className='form-img--wrapper' style={{ marginTop: '310px' }}>
        <h1>
          Thanks, <span className='username'>{state.data.name}</span>!<br />
          Please create a 52 character password
        </h1>
        <div className="lid">He-he, just kidding! A simple 7-character password would do, or you can sign-in with Google if you like. It will help us save your progress!</div>

        <p className="register__error">
          RegisterError: {message}
        </p>

        <p>handleRegister = {handleRegister}</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>

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

          <input className="btn-big-round" type="submit" value='' />
        </form>
      </div>

    </Container>
  );
};

export default withRouter(Step5Password);
