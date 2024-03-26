// Third Party Imports

// Local Imports
import { useEffect } from "react";
import styles from "../css/Survey.module.css";
import Survey from "./Survey";

interface showSurvey {
  onClose: () => void;
}

/**
 * Represents the sign up screen
 * @returns React Component
 */
const SignUp = ({ onClose }: showSurvey) => {
  // Disables user scrolling while this component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div className={styles.surveyBase}>
      <div className={styles.surveyContainer}>
        <button id={styles.closeButton} onClick={onClose}>
          back
        </button>
        <div id={styles.surveyBody}>
          <h1>
            Creating an account allows you to get the help you need even faster!
          </h1>
          <p>Username: </p>
          <input></input>
          <p>Password: </p>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
