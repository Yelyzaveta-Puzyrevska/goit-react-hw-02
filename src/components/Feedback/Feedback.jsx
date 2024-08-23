const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
