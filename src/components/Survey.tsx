// Third party library imports
import { useEffect, useState, useRef } from "react";

// Local imports
import { surveyQuestions } from "../interfaces/JsonSurveyQuestions";

import styles from "../css/Survey.module.css";

interface showSurvey {
  onClose: () => void;
}

// This component is passed an object of type showSurvey that only contains a function
// that should return void. It is passed a function definition (in LandingPage.tsx)
// that tells the showButton state to set itself to false.
/**
 *  This is the survey box that appears when clicking on the "I'm new" button
 *
 * @param onClose A callback function from LandingPage.tsx that handles what happens when the user closes the survey box
 * @returns React Component
 */
const Survey = ({ onClose }: showSurvey) => {
  const [surveyQuestions, setsurveyQuestions] =
    useState<surveyQuestions | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const answerArray = useRef<boolean[]>([]);

  // Disables user scrolling while this component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  // The survey questions are served through a JSON file the public folder and are thus accessed through this asynchronous fetch request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../surveyQuestions.json");
        const data = await response.json();
        setsurveyQuestions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Answering a survey question pushes the result to a boolean array and advances to the next question
  function handleAnswerButtonClick(answer: boolean): void {
    answerArray.current.push(answer);
    console.log(answerArray.current);
    setCurrentQuestionIndex((current) => current + 1);
  }

  return (
    <div className={styles.surveyBase}>
      <div className={styles.surveyContainer}>
        <button id={styles.closeButton} onClick={onClose}>
          back
        </button>
        <div id={styles.surveyBody}>
          {surveyQuestions &&
            currentQuestionIndex < Object.keys(surveyQuestions).length && (
              <div>
                <h1>
                  {
                    surveyQuestions[
                      Object.keys(surveyQuestions)[currentQuestionIndex]
                    ]
                  }
                </h1>
                <span>
                  <button onClick={() => handleAnswerButtonClick(true)}>
                    Yes
                  </button>
                  <button onClick={() => handleAnswerButtonClick(false)}>
                    No
                  </button>
                </span>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
