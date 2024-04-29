// Third Party Imports
import React, { useState } from "react";

// Local Imports
import styles from "../css/SignInUp.module.css";
import hashString from "../functions/hasher";

interface showSurvey {
  onClose: () => void;
  surveyAnswers: boolean[] | null;
}

const SignUp = ({ onClose, surveyAnswers }: showSurvey) => {
  const [username1, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const passwordHash1 = await hashString(password);
    const newUserData = {
      username: username1,
      passwordHash: passwordHash1,
    };

    try {
      const response = await fetch("http://localhost:8080/createUser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (response.status === 200) {
        console.log("reponse status " + response.status);

        setIsSuccess(true);

        if (surveyAnswers) {
          try {
            const surveyResponse = await fetch(
              "http://localhost:8080/saveSurveyResults",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  username: username1,
                  surveyAnswersArray: surveyAnswers,
                }),
              }
            );
            if (surveyResponse.status === 200) {
              console.log("Survey results saved successfully");
            } else {
              console.error("Failed to save survey results");
            }
          } catch (error) {
            console.error("Error saving survey results:", error);
          }
        }
      } else if (response.status === 401) {
        setIsSuccess(false);

        const responseData = await response.json();
        setErrorMessage(responseData.message);
      }
    } catch (error) {
      console.error("error", error);
      setIsSuccess(false);
      setErrorMessage("An error occurred while creating the account.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username: </p>
              <input
                name="username"
                value={username1}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
            <label>
              <p>Password: </p>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <input type="submit" value="Login"></input>
          </form>
          {isSuccess === true && <p>Account created successfully!</p>}
          {isSuccess === false && <p>Error: {errorMessage}</p>}
          <p>Already have an account?</p>
          <button>click me!</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
