import { useEffect, useRef } from "react";
import styles from "../css/Survey.module.css";

interface showSurvey {
  onClose: () => void;
}

const answerArray = useRef([]);

function handleYesButtonClick(): void {}

// This component is passed an object of type showSurvey that only contains a function
// that should return void. It is passed a function definition (in LandingPage.tsx)
// that tells the showButton state to set itself to false.
const Survey = ({ onClose }: showSurvey) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  var answerArray = [];

  return (
    <div className={styles.surveyBase}>
      <div className={styles.surveyContainer}>
        <button id={styles.closeButton} onClick={onClose}>
          back
        </button>
        <div id={styles.surveyBody}>
          <h1>Question one</h1>
          <p>Hello</p>
          <span>
            <button onClick={handleYesButtonClick}>Yes</button>
            <button>No</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Survey;
