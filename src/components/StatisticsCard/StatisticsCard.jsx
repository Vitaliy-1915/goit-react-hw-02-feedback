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

  handleIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <StatisticsSection>
        <StatisticCardContent>
          <StatisticCardTitle title="Please leave feedback" />

          <FeedbackOptions
            text={'Good'}
            onLeaveFeedback={this.handleIncrement}
          ></FeedbackOptions>
          <FeedbackOptions
            text={'Neutral'}
            onLeaveFeedback={this.handleIncrement}
          />
          <FeedbackOptions
            text={'Bad'}
            onLeaveFeedback={this.handleIncrement}
          />

          <StatisticCardTitle title="Statistics" />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={total}
            // positivePercentage={positivePercentage}
          />
        </StatisticCardContent>
      </StatisticsSection>
    );
  }
}

// function StatisticCard() {
//   return (
//     <StatisticsSection>
//       <StatisticCardContent>
//         <StatisticCardTitle title="Please leave feedback" />

//         <FeedbackOptions options={'Good'} />
//         <FeedbackOptions options={'Neutral'} />
//         <FeedbackOptions options={'Bad'} />

//         <StatisticCardTitle title="Statistics" />

//         <Statistics></Statistics>

//       </StatisticCardContent>
//     </StatisticsSection>
//   );
// }

// export default StatisticCard;
