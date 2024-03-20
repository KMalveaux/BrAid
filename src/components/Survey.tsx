// Third party library imports
import { useEffect, useState, useRef } from "react";

// Local imports
import styles from "../css/Survey.module.css";

interface showSurvey {
  onClose: () => void;
}

// The structure of our json file containing the survey questions
interface JsonData {
  QuestionOne: string;
}

// This component is passed an object of type showSurvey that only contains a function
// that should return void. It is passed a function definition (in LandingPage.tsx)
// that tells the showButton state to set itself to false.
const Survey = ({ onClose }: showSurvey) => {
  const [jsonData, setJsonData] = useState<JsonData | null>(null);

  const answerArray = useRef<boolean[]>([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  // The survey questions are served through a JSON file the public folder and are thus accessed through an asynchronous fetch request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../surveyQuestions.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          {jsonData && (
            <div>
              <h1>{jsonData.QuestionOne}</h1>
              <span>
                <button onClick={handleYesButtonClick}>Yes</button>
                <button onClick={handleNoButtonClick}>No</button>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
