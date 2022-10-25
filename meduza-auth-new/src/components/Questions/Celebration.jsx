import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Celebration = (props) => {
  const {
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./your-email");
    reset();
  };

  return (
    <Container
      className=' container__form-img container__form-img--center'
    >
      <div style={{paddingTop:'310px'}}>
        <h1>
          Lorem Ipsum Celebration blabla
        </h1>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <form
          className='form-img'
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="submit" className="btn-big-round-blue">
            Awesome!
          </button>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Celebration);
