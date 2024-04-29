// Third Party Imports
import { useState } from "react";

// Local Imports
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import toggleState from "../functions/stateToggler";

import styles from "../css/AlternateBanner.module.css";

import logo from "../images/BRAidAltLogo.svg";

/**
 * Represents the banner displayed at the topmost section of the website
 * @returns JSX.Element
 */
const AlternateBanner: React.FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className={styles.BannerContainer}>
      {showSignIn ? <SignIn onClose={() => setShowSignIn(false)} /> : <></>}
      {showSignUp ? <SignUp onClose={() => setShowSignUp(false)} /> : <></>}

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
        <button
          id={styles.signInButton}
          onClick={() => setShowSignIn(toggleState(showSignIn))}
        >
          Log In
        </button>
        <button
          id={styles.logInButton}
          onClick={() => setShowSignUp(toggleState(showSignUp))}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AlternateBanner;
