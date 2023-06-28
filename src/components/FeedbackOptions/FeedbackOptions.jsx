import React from 'react';
import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.button}>

{options.map((option) => (
      <button
      className={css.button_item}
        key={option}
        name={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))} 
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};