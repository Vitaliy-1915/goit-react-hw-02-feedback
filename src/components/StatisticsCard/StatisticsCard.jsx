import React from 'react';
import PropTypes from 'prop-types';
import { StatisticCardContent } from './StatisticsCard.styles';

function StatisticCard({ children }) {
  return <StatisticCardContent>{children}</StatisticCardContent>;
}

export default StatisticCard;

StatisticCard.propTypes = {
  children: PropTypes.node.isRequired,
};
