import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        key={option.id}
        name={option.id}
        type="button"
        onClick={() => onLeaveFeedback(option.id)}
      >
        {option.title}
      </button>
    ))}
  </div>
);

// import { Component } from 'react';

// const stateRate = [
//   { id: 'good', title: 'Good' },
//   { id: 'neutral', title: 'Neutral' },
//   { id: 'bad', title: 'Bad' }
// ];

// const stateBtn = [
//   { id: 'good', title: 'Good' },
//   { id: 'neutral', title: 'Neutral' },
//   { id: 'bad', title: 'Bad' }
// ];

// export class FeedbackOptions extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleClick = (event) => {
//     const { name } = event.target;
//     this.setState((prevState) => ({
//       [name]: prevState[name] + 1
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//  countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         {stateBtn.map((state) => (
//           <button
//             key={state.id}
//             name={state.id}
//             type="button"
//             onClick={this.handleClick}
//           >
//             {state.title}
//           </button>
//         ))}
//         <h2>Statistics</h2>
//         <ul>
//           {stateRate.map((state) => (
//             <li key={state.id}>
//               {state.id}: {this.state[state.id]}
//             </li>
//           ))}
//           <li>Total: {this.countTotalFeedback()}</li>
//           <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
//         </ul>
//       </div>
//     );
//   }
// }
