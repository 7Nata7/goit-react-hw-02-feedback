import { Component } from 'react';
import { Section } from '../components/Section/Section'
import { Statistics } from '../components/Statistics/Statistics'
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions'
import { Notification } from '../components/Notifications/Notifications'
import css from './App.module.css'


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
    const totalFeedback = this.countTotalFeedback();

    return (
      <div className={css.section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
  {totalFeedback === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <Statistics
  good={this.state.good}
  neutral={this.state.neutral}
  bad={this.state.bad}
  total={this.countTotalFeedback()}
  positivePercentage={this.countPositiveFeedbackPercentage()}
/>
  )}
</Section>
      </div>
    );
  }
}