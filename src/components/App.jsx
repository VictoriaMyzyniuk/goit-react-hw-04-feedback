import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt(good > 0 ? (good / countTotalFeedback()) * 100 : 0);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Container>
  );
};

// export class App extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const total = Object.values(this.state);
//     return total.reduce((acc, value) => acc + value, 0);
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Number.parseInt(
//       this.state.good > 0
//         ? (this.state.good / this.countTotalFeedback()) * 100
//         : 0
//     );
//   };
//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <Container>
//         <FeedbackOptions
//           options={options}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             totalFeedback={total}
//             positiveFeedbackPercentage={positiveFeedbackPercentage}
//           />
//         )}
//       </Container>
//     );
//   }
// }
