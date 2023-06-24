import { Component } from 'react';
import { Section } from '../components/Section/Section'
import { Statistics } from '../components/Statistics/Statistics'
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions'
import { Notification } from '../components/Notifications/Notifications'
import css from './App.module.css'
const stateBtn = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' }
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateBtn}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
  {totalFeedback === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={totalFeedback}
      positivePercentage={positivePercentage}
    />
  )}
</Section>
      </div>
    );
  }
}