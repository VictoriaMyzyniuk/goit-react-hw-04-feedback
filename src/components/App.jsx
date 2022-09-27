import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      this.state.good > 0
        ? (this.state.good / this.countTotalFeedback()) * 100
        : 0
    );
  };
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={options} countFeedback={this.countFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totalFeedback={total}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      </>
    );
  }
}
