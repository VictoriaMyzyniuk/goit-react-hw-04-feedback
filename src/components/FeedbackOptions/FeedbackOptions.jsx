import { PropTypes } from 'prop-types';
import { Section } from 'components/Section/Section';
import {
  FeedbackButtonList,
  FeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <FeedbackButtonList>
        {options.map((option, idx) => {
          return (
            <li key={idx}>
              <FeedbackButton
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </FeedbackButton>
            </li>
          );
        })}
      </FeedbackButtonList>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
