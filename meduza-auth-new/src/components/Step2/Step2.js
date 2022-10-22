
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';

import Container from '@material-ui/core/Container';

const Step2 = (props) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {

    reset();
    actions.updateAction(data);
    // alert(JSON.stringify(data));
    // alert(JSON.stringify(props));
    // alert(JSON.stringify(props.history));
    // props.history.push("./step3");
    props.history.push("./result");
    reset();
  };

  const onClick = (e, data) => {
    const clickForm = e.target.parentNode.closest('form');
    console.log('clickForm.getAttribut("data-form") = ', clickForm.getAttribute('data-form'));
    alert(JSON.stringify(data));
  };
  // debugger
  // console.log('props.name = ',props.name);


  return (
    <Container className='container__form-img container__form-img--right'>

      <h1>
        That’s a beautiful name, {state.data.firstName}!<br />
        I am [GUIDE]. How old are you?
      </h1>
      <div className='form-img'>
        <div className='step2-buttons'>
          <form
            data-form='age-1'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />
            <button
              className='beautiful-button'
              type="submit"
            >
              16-24
            </button>
          </form>
          <form
            data-form='age-2'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <button
              className='beautiful-button'
              type="submit"
            >
              25-34
            </button>
          </form>

          <form
            data-form='age-3'
            onSubmit={handleSubmit(onSubmit)}
            onClick={onClick}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <button
              className='beautiful-button'
              type="submit"
            >
              24-44
            </button>
          </form>
          <form
            data-form='age-4'
            onClick={onClick}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className='form-input'
              name="age"
              defaultValue={state.data.age}
              {...register("age")}
            />

            <button
              className='beautiful-button'
              type="submit"
            >
              45 +
            </button>
          </form>

        </div>

      </div>
    </Container>
  );
};

export default withRouter(Step2);
