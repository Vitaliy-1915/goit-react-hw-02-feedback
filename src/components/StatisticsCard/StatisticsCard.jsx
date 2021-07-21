import React, { Component } from 'react';
import StatisticCardTitle from '../StatisticCardTitle/StatisticCardTitle';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { StatisticCardContent } from './StatisticsCard.styles';

export default class StatisticCard extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );

    return (
      <StatisticsSection>
        <StatisticCardContent>
          <StatisticCardTitle title="Please leave feedback" />

          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>

          <StatisticCardTitle title="Statistics" />

          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            'No feedback given'
          )}
        </StatisticCardContent>
      </StatisticsSection>
    );
  }
}
