import React, { Component } from 'react';
import Statistics from '../Statistics';
import Section from '../Section';
import FeedbackOptions from '../Feedback';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return(
      <Section title="">
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage}></Statistics>
        <FeedbackOptions options={this.state.good} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
      </Section>
    );
  }
}

export default App;