export const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <ul>
      {options.map((option, idx) => {
        return (
          <li key={idx}>
            <button type="button" onClick={() => countFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
