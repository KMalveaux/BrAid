// Third Party Imports
import { useState } from "react";

// Local Imports
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import toggleState from "../functions/stateToggler";

import styles from "../css/AlternateBanner.module.css";

import logo from "../images/BRAidAltLogo.svg";

interface props {
  setUsernameInLandingPage: (usrname: string) => void;
  onSurveyResultsFetch: (answersArr: boolean[]) => void;
}

/**
 * Represents the banner displayed at the topmost section of the website
 * @returns JSX.Element
 */
const AlternateBanner: React.FC<props> = ({
  setUsernameInLandingPage,
  onSurveyResultsFetch,
}: props) => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const [userName, setUsername] = useState<string | null>(null);

  const handleSignedIn = (signedInUsername: string) => {
    setUsername(signedInUsername);
    setUsernameInLandingPage(signedInUsername);
  };

  const handleFetch = (answersArr: boolean[]) => {
    onSurveyResultsFetch(answersArr);
  };

  return (
    <div className={styles.BannerContainer}>
      {showSignIn ? (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onSignIn={handleSignedIn}
          onSurveyResultsFetch={handleFetch}
        />
      ) : (
        <></>
      )}
      {showSignUp ? (
        <SignUp onClose={() => setShowSignUp(false)} surveyAnswers={null} />
      ) : (
        <></>
      )}

      <img id={styles.logo} src={logo} alt="logo goes here" />
      <div id={styles.linksContainer}>
        <p>Home</p>
        <p>Resources</p>
        <p>About</p>
      </div>
      <div className={styles.profileContainer}>
        <img
          id={styles.profileIcon}
          src={require("../images/profileIcon.png")}
          alt="Profile Icon Here"
        />
        {userName === null ? (
          <button
            id={styles.signInButton}
            onClick={() => setShowSignIn(toggleState(showSignIn))}
          >
            Log In
          </button>
        ) : (
          <div className={styles.signedInUsernameConatiner}>
            <p>{userName}</p>
          </div>
        )}

        {userName === null ? (
          <button
            id={styles.logInButton}
            onClick={() => setShowSignUp(toggleState(showSignUp))}
          >
            Sign Up
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default AlternateBanner;
