// import PropTypes from 'prop-types';
import { StatisticEl } from 'components/Statistics/Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticEl>
        <span>Good {good}</span>
        <span>Neutral {neutral}</span>
        <span>Bad {bad}</span>
        <span>Total {totalFeedback}</span>
        <span>Positive feedback {positiveFeedbackPercentage} %</span>
      </StatisticEl>
    </div>
  );
};

// FeedbackEl.propTypes = {
//   PropTypes
// }
