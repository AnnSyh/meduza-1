
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';

import Container from '@material-ui/core/Container';

const Step2 = (props) => {
  // форма
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    console.log('data = ', data);
    actions.updateAction(data);
    props.history.push("./Step3");
    // props.history.push("./Result");
    reset();
  };

  const CheckboxRadio = (props) => {
    return (
      <div
        className="form_radio_btn"
      >
        <input
          {...register('age', { required: true })}
          type="radio"
          name="age"
          value={props.id}
          id={props.id}
        />
        <label htmlFor={props.id}>
          {props.age}
        </label>
      </div>
    )
  }


  return (
    <Container className='container__form-img container__form-img--right'>
      <div style={{paddingTop:'240px'}}>
        <h1>
          That’s a beautiful name, {state.data.name}!<br />
          I am [GUIDE]. How old are you?
        </h1>
        <div className='form-img'>
          <form
            onChange={handleSubmit(onSubmit)}
          >
            <div className='age-checks'>
              <CheckboxRadio id='1' age='16-24'/>
              <CheckboxRadio id='2' age='25-34' />
              <CheckboxRadio id='3' age='35-44' />
              <CheckboxRadio id='4' age='45 +' />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(Step2);
