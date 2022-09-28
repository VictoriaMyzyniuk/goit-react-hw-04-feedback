import PropTypes from 'prop-types';
import {
  StatisticEl,
  StatisticItem,
  StatisticItemSecondary,
  StatisticItemTotal,
} from 'components/Statistics/Statistics.styled';
import { Section } from 'components/Section/Section';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <Section title="Statistics">
      <StatisticEl>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItemTotal>Total: {totalFeedback}</StatisticItemTotal>
        <StatisticItemSecondary>
          Positive feedback: {positiveFeedbackPercentage}%
        </StatisticItemSecondary>
      </StatisticEl>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
