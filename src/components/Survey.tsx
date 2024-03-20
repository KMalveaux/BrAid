import { useEffect, useRef } from "react";
import styles from "../css/Survey.module.css";

interface showSurvey {
  onClose: () => void;
}

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

  const answerArray = useRef<boolean[]>([]);

  function handleYesButtonClick(): void {
    answerArray.current.push(true);
    console.log(answerArray.current);
  }
  function handleNoButtonClick(): void {
    answerArray.current.push(false);
    console.log(answerArray.current);
  }

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
            <button onClick={handleNoButtonClick}>No</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Survey;
