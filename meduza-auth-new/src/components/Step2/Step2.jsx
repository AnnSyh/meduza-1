
import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import '../scss/style.css';

import Container from '@material-ui/core/Container';

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value="age-1">16-24</option>
      <option value="age-2">25-34</option>
      <option value="age-3">24-44</option>
      <option value="age-4">45 +</option>
    </select>
  </>
));

const Step2 = (props) => {
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
          >
            <Select label="Age" {...register("Age")} />

            <button
              className='beautiful-button'
              type="submit"
            >
             submit
            </button>
          </form>

        </div>

      </div>
    </Container>
  );
};

export default withRouter(Step2);
