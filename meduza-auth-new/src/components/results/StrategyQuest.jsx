import React from 'react';
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import './../scss/style.css';
import styles from './StrategyQuest.modules.css';

import Container from '@material-ui/core/Container';

const StrategyQuest = (prop) => {

  const { state } = useStateMachine(updateAction);


  return (
    <Container 
    // className={styles.text} 
    className={'container__form-img ' + styles.strategeQuest}
    >

      <h1 className={styles.strategeQuest} >111111 Welcome to Life Strategy Quest</h1>
      <div className='text-block'>
        <p>
          <span className='username'>{state.data.name}</span>, thank you for trusting us. We hope the assessment brought some clarity for you.
        </p>
        <p>
        We would be happy to guide you to even more clarity with Life Strategy Quest. It’s a fun, self-paced journey to help you uncover your true self, understand your options, and turn your dream life into reality.
        </p>
      </div>

    </Container>
  )
}

export default StrategyQuest;