import React, { Component } from 'react';
import Section from '../StatisticsCardTitle/StatisticsCardTitle';
import { StatisticsCardContainer } from './StatisticsCard.styles';

export default class StatisticsCard extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <StatisticsCardContainer>
        <Section title={'Please leave feedback'}></Section>;
      </StatisticsCardContainer>
    );
  }
}
