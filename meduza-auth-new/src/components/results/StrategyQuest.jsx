import React from 'react';
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import './../scss/style.css';
import styles from './StrategyQuest.module.css';

import Container from '@material-ui/core/Container';

// import imgLeft from '../../images/quest-img-left.svg';
// import imgRight from '../../images/quest-img-right.svg';

const StrategyQuest = (prop) => {

  const { state } = useStateMachine(updateAction);


  return (
    <Container
      className={'stratege-quest ' + styles.strategeQuest}
    >

      <h1 className={styles.title} >Welcome to  Life Strategy Quest</h1>
      <div className={styles.textBlock}>
        <p>
          <span className='username'>{state.data.name}</span>, thank you for trusting us. We hope the assessment brought some clarity for you.
        </p>
        <p>
          We would be happy to guide you to even more clarity with Life Strategy Quest. It’s a fun, self-paced journey to help you uncover your true self, understand your options, and turn your dream life into reality.
        </p>
      </div>

      <div className={styles.block}>

        <div className={styles.itemLeft}>
          <div className={styles.itemTitle}>You don’t have to decide just yet</div>
          <div className={styles.itemText}>
            Enjoy the first steps of the quest for free. Even if you decide to do just that, you will already feel a lot clearer about your life. We hope you will have fun!
          </div>
        </div>

        <div className={styles.itemRight}>
          <div className={styles.itemTitle}>You don’t have to decide just yet</div>
          <div className={styles.itemText}>
            Enjoy the first steps of the quest for free. Even if you decide to do just that, you will already feel a lot clearer about your life. We hope you will have fun!
          </div>
        </div>

      </div>

    </Container>
  )
}

export default StrategyQuest;