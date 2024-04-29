// Third party library imports
import { useEffect, useState, useRef } from "react";

// Local imports
import styles from "../css/Survey.module.css";
import { SurveyHook } from "../hooks/FetchSurveyQuestions";
import SignUp from "./SignUp";

interface showSurvey {
  onClose: () => void;
  signedIn: boolean;
  onSurveyFinish: (answers: boolean[]) => void;
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
const Survey = ({ onClose, signedIn, onSurveyFinish }: showSurvey) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const answerArray = useRef<boolean[]>([]);

  // Disables user scrolling while this component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const surveyQuestions = SurveyHook();

  // Answering a survey question pushes the result to a boolean array and advances to the next question
  function handleAnswerButtonClick(answer: boolean): void {
    answerArray.current.push(answer);
    console.log(answerArray.current);
    setCurrentQuestionIndex((current) => current + 1);
  }

  const handleGoToAccountCreation = () => {
    onSurveyFinish(answerArray.current);
    setShowSignUp(true);
  };

  const handleDoNotCreateAccount = () => {
    onSurveyFinish(answerArray.current);
    answerArray.current = [];
    onClose();
  };

  return (
    <div className={styles.surveyBase}>
      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          surveyAnswers={answerArray.current}
        />
      )}
      <div className={styles.surveyContainer}>
        <button id={styles.closeButton} onClick={onClose}>
          back
        </button>
        <div id={styles.surveyBody}>
          {surveyQuestions &&
          currentQuestionIndex < Object.keys(surveyQuestions).length - 1 ? (
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
          ) : signedIn ? (
            <div className={styles.completedSurveyContainer}>
              <p>
                The site has been retailored based on your updated reponses!
              </p>
              <button onClick={handleDoNotCreateAccount}>Ok</button>
            </div>
          ) : (
            <div className={styles.completedSurveyContainer}>
              <p>Survey Complete!</p>
              <p>
                Your answers to these questions have been used to custom tailor
                this site to highlight all the resources most relevant to you!
              </p>
              <p>
                Scroll below and select one of the resources to learn more about
                how it can help you in particular.
              </p>
              <p>
                But before you go, would you like to create an account to save
                your results and access them for even faster assistance next
                time?
              </p>
              <button onClick={handleGoToAccountCreation}>Yes</button>
              <button onClick={handleDoNotCreateAccount}>No</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
