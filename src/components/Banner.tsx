// Third Party Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { library } from "@fortawesome/fontawesome-svg-core";

// Local Imports
import styles from "../css/Banner.module.css";
import DropDown from "./DropDown";
import { useState } from "react";
import toggleState from "../functions/stateToggler";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Adding imported icon to the library. Font Awesome
library.add(faUser);

const Banner = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className={styles.bannerBase}>
      {showSignIn ? <SignIn onClose={() => setShowSignIn(false)} /> : <></>}
      {showSignUp ? <SignUp onClose={() => setShowSignUp(false)} /> : <></>}
      <img
        src={require("../images/BRAidLogo.png")}
        style={{ marginRight: "20%" }}
        alt={"BRAidLogo"}
      />

      <div className={styles.bannerContent}>
        <DropDown
          title="Home"
          items={["Medication", "Injury", "Emergencies"]}
        />
        <DropDown
          title="Resources"
          items={["Food", "Health", "Shelter", "Miscellaneous"]}
        />
        <DropDown
          title="About"
          items={[
            "24 Hour Food Banks",
            "Food assistances programs",
            "Emergencies",
          ]}
        />
      </div>
      <span
        id={styles.profileIcon}
        onClick={() => setShowSignIn(toggleState(showSignIn))}
      >
        <FontAwesomeIcon icon={faUser} />
        <p>Login?</p>
      </span>
      <button onClick={() => setShowSignUp(toggleState(showSignUp))}>
        Sign up
      </button>
    </div>
  );
};

export default Banner;
