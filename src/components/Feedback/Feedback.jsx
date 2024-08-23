const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
      <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total Feedback: {totalFeedback}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

export default Feedback;
