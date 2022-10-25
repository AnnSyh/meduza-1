import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import Container from '@material-ui/core/Container';

const Step7ReadySeeRezalts = (props) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  });

  const { state, actions } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./rezalt");
    // props.history.push("./rezalts");
    reset();
  };

  return (
    <Container className='container__form-img container__form-img--left'>
      <h1>
        Woo-hoo, your report is here. Are you<br />
        ready to see the results?
      </h1>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <form
        className='Step3-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <button type="submit" className="btn-big-round-blue">
        I am ready!
        </button>
      </form>
    </Container>
  );
};

export default withRouter(Step7ReadySeeRezalts);
