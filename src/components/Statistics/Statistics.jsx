import React from 'react';
import PropTypes from "prop-types";
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.state_ul}>
    <li className={css.state_title}>
      Good: <span className={css.state_mark}>{good}</span>
    </li>
    <li className={css.state_title}>
      Neutral: <span className={css.state_mark}>{neutral}</span>
    </li>
    <li className={css.state_title}>
      Bad: <span className={css.state_mark}>{bad}</span>
    </li>
    <li className={css.state_title}>
      Total: <span className={css.state_mark}>{total}</span>
    </li>
    <li className={css.state_title}>
      Positive feedback: <span className={css.state_mark}>{positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
