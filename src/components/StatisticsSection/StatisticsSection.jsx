import React, { Component } from 'react';
import Section from '../StatisticsCard/StatisticsCard';
import { StatisticsSectionContainer } from './StatisticsSection.styles';

export default class StatisticsSection extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <StatisticsSectionContainer>
        <Section></Section>
      </StatisticsSectionContainer>
    );
  }
}
