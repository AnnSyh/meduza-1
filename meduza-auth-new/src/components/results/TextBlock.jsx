import React from 'react';
import { useStateMachine } from "little-state-machine";
import updateAction from "../updateAction";

const TextBlock =  (prop) => {

  const { state } = useStateMachine(updateAction);
  const interview = ["health", "friend", "love", "career", "money", "fun", "growth"];

  //выбрать данные из диаграммы с оценкой > 7
  function More7() {
    const rez = [];
    const obj = state.data;

    for (let key in obj) {
      if (Number(obj[key]) >= 7) {
        // console.log('interview.length = ', interview.length)
        // console.log('key = ', key)

        for (let i = 0; i < interview.length; i++) {
          // console.log('interview[i] = ', interview[i])
          // console.log('condition = ', (key === interview[i]))

          if (key === interview[i]) {
            // console.log('key = ', key)
            rez.push(key)
          }
        }
      }
    }
    console.log('rez = ', rez)

    return (rez.join(', '))
  }


  return (
    <div className='text-block'>
      <p>
        {state.data.name}, let’s start by acknowledging what’s going right in your life.
        It sounds like:
        <span className='uppercase'>
          <More7 />
        </span>
        {/* [AREA 1=SCORE 7+], [AREA 2=SCORE 7+], [AREA 1=SCORE 7+]  */}
        have scored
        quite high. You should give yourself credit.
      </p>
      <p>
        Most people struggle to maintain their life in balance at all times, so it’s completely normal that some areas of your life scored a little lower.
      </p>
      <p>
        The good news is that you now have clarity of what needs your attention. Sometimes we feel down or not quite fulfilled without even understanding what needs fixing.
        When you know what to focus on, it is a lot easier to fix it.
      </p>
      {/* <h3>Let’s look at each area in more detail</h3> */}

    </div>
  )
}

export default TextBlock;