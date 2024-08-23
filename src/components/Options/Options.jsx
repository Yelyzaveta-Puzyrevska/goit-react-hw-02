const Options = ({ options, onFeedback, totalFeedback, onReset }) => {
  return (
    <div>
      <ul>
        <li>Good: {options.good}</li>
        <li>Neutral: {options.neutral}</li>
        <li>Bad: {options.bad}</li>
      </ul>
      <div>
        <button onClick={() => onFeedback("good")}>Good</button>
        <button onClick={() => onFeedback("neutral")}>Neutral</button>
        <button onClick={() => onFeedback("bad")}>Bad</button>
        {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
      </div>
    </div>
  );
};

export default Options;
