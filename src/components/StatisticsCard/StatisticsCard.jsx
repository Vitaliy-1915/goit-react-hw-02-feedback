import React from 'react';
import StatisticCardTitle from '../StatisticCardTitle/StatisticCardTitle';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import FeedbackOptions from '../Button/Button';
import Statistics from '../Statistics/Statistics';
import { StatisticCardContent } from './StatisticsCard.styles';

function StatisticCard() {
  return (
    <StatisticsSection>
      <StatisticCardContent>
        <StatisticCardTitle title="Please leave feedback" />

        <FeedbackOptions options={'Good'} />
        <FeedbackOptions options={'Neutral'} />
        <FeedbackOptions options={'Bad'} />

        <StatisticCardTitle title="Statistics" />

        <Statistics></Statistics>

        {/* // <ul>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    // </ul> */}
      </StatisticCardContent>
    </StatisticsSection>
  );
}

export default StatisticCard;

// StatisticCard.propTypes = {
//   children: PropTypes.node.isRequired,
// };
