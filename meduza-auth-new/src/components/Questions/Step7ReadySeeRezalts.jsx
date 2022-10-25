import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import styles from './Step7ReadySeeRezalts.module.css';

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
    props.history.push("./result");
    // props.history.push("./rezalts");
    reset();
  };

  return (
    <Container
      className={'container__form-img ' + styles.formImg}
    >
      <div style={{ paddingTop: '320px' }}>
        <h1>
          Woo-hoo, your report is here. Are you<br />
          ready to see the results?
        </h1>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        <form
          className='form-img'
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="submit" className="btn-big-round-blue">
            I am ready!
          </button>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Step7ReadySeeRezalts);
