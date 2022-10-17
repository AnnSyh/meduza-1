import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
    props.history.push("./result");
    reset();
  };

  return (
    <Container className='container__form-img container__form-img--right'>
      <h1>
        That’s the best age, {state.data.firstName}!<br/>
        Are you ready?
      </h1>
      <form
        className='Step3-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button type="submit" variant="contained" color="primary">
          Let’s do it!
        </Button>

      </form>
    </Container>
  );
};

export default withRouter(Step3);
