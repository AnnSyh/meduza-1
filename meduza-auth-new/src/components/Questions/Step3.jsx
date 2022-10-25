import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step3 = (props) => {
  const {
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    // props.history.push("./result");
    props.history.push("./health");
    reset();
  };

  return (
    <Container
      className='container__form-img container__form-img--center'
    >
      <div className='form-img--wrapper' style={{paddingTop:'240px'}}>
        <h1>
          That’s the best age, {state.data.name}!<br />
          Are you ready?
        </h1>
        <form
          className='form-img'
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="submit" className="btn-big-round-blue">
            Let’s do it!
          </button>

        </form>
      </div>



    </Container>
  );
};

export default withRouter(Step3);
