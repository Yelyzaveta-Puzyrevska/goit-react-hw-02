import { useState } from "react";
import { useEffect } from "react";
import Options from "../components/Options/Options";
import Feedback from "../components/Feedback/Feedback";
import Notification from "../components/Notification/Notification";
import Description from "../components/Description/Description";

export const Vote = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setOptions((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = options.good + options.neutral + options.bad;

  const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((options.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (storedFeedback) {
      setOptions(storedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(options));
  }, [options]);

  return (
    <>
      <Description />
      <Options
        options={options}
        onFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={options}
          totalFeedback={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </>
  );
};
