import React from 'react';
import css from './Statistics.module.css'

const stateRate = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' }
];

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.state_ul}>
    {stateRate.map((state) => (
      <li className={css.state_title}
      key={state.id}>
        {state.title}: 
        <span className={css.state_mark}>{state.id === 'good' ? good : state.id === 'neutral' ? neutral : bad}</span>
      </li>
    ))}
    <li className={css.state_title}>Total: <span className={css.state_mark}>{total}</span></li>
    <li className={css.state_title}>Positive feedback: <span className={css.state_mark}>{positivePercentage}%</span></li>
  </ul>
);

