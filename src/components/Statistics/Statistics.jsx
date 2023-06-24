import React from 'react';

const stateRate = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' }
];

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    {stateRate.map((state) => (
      <li key={state.id}>
        {state.title}: {state.id === 'good' ? good : state.id === 'neutral' ? neutral : bad}
      </li>
    ))}
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
);

