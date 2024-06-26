// Third Party Imports
import React, { useState } from "react";

// Local Imports
import styles from "../css/Survey.module.css";
import hashString from "../functions/hasher";

interface showSurvey {
  onClose: () => void;
}

const SignUp = ({ onClose }: showSurvey) => {
  const [username1, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

      if (!response.ok) {
        console.log(JSON.stringify(response, null, 1));
      }
    } catch (error) {
      console.error("error", error);
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

          <p>Already have an account?</p>
          <button>click me!</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
