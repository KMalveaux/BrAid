// Third Party Imports
import React, { useEffect, useState } from "react";

// Local Imports
import styles from "../css/Survey.module.css";
import Survey from "./Survey";

interface showSurvey {
  onClose: () => void;
}

/**
 * Represents the sign up screen
 * @returns React Component
 */
const SignIn = ({ onClose }: showSurvey) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Disables user scrolling while this component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
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
          <h1>Sign in to B+RAid</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username: </p>
              <input
                name="username"
                value={username}
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

          <p>Don't have an account?</p>
          <button>click me!</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
