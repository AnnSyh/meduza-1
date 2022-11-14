import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

import './../scss/style.css';
import styles from './StrategyQuest.module.css';

import Container from '@material-ui/core/Container';

// import imgLeft from '../../images/quest-img-left.svg';
// import imgRight from '../../images/quest-img-right.svg';

const StrategyQuest = (props) => {
  const {
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async (data) => {
    actions.updateAction(data);
    props.history.push("./by-the-way");
    // alert(JSON.stringify(data));
    reset();
  };

  const { actions, state } = useStateMachine({ updateAction });


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
            Enjoy the first steps of the quest for free. Even if you decide to do just that,
            you will already feel a lot clearer about your life. We hope you will have fun!
          </div>
        </div>

        <div className={styles.itemRight}>
          <div className={styles.itemTitle}>We are a small, self-funded team. We don’t believe in ads or selling your data</div>
          <div className={styles.itemText}>
            his is why we are offering a full quest as a premium subscription, so that
            you can enjoy your personal growth journey in a peaceful and serene way.
          </div>
        </div>

      </div>
      <h1 className={styles.title} >Our packages</h1>
      <p>
        Get access to the full quest and all life management tools with a payment plan that works best for you:
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete='off'
      >
        <div className={styles.items}>


          <div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Monthly subscription</div>
              <div>
                <div className={styles.itemPrice}>€29.99</div>
                <div className={styles.itemPriceText}>cancel any time</div>
              </div>
            </div>
            <button type="submit" className={styles.btnBlue}>Subscribe Monthly</button>
          </div>
          <div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Yearly subscription</div>
              <div>
                <div className={styles.itemPrice}>€229.99</div>
                <div className={styles.itemPriceText}>cancel any time</div>
              </div>
            </div>
            <button type="submit" className={styles.btnBlue}>Subscribe Monthly</button>
          </div>
          <div>
            <div className={styles.item}>
              <div>
                <div className={styles.itemTitle}>Lifetime access</div>
                <p>to the quest and all the tools</p>
              </div>
              <div>
                <div className={styles.itemPrice}>€399.99</div>
                <div className={styles.itemPriceText}>cancel any time</div>
              </div>
            </div>
            <button type="submit" className={styles.btnBlue}>Subscribe Monthly</button>
          </div>
          <div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Decide later</div>
              <div className={styles.itemPrice}>€0</div>
            </div>
            <button type="submit" className={styles.btn}>Try for Free</button>
          </div>


        </div>
      </form>

    </Container>
  )
}

export default withRouter(StrategyQuest);