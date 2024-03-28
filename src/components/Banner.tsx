// Third Party Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { library } from "@fortawesome/fontawesome-svg-core";

// Local Imports
import styles from "../css/Banner.module.css";
import DropDown from "./DropDown";
import { useState } from "react";
import toggleState from "../functions/stateToggler";
import SignUp from "./SignUp";

// Adding imported icon to the library. Font Awesome
library.add(faUser);

const Banner = () => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className={styles.bannerBase}>
      {showSignUp ? <SignUp onClose={() => setShowSignUp(false)} /> : <></>}
      <img
        src={require("../images/BRAidLogo.png")}
        style={{ marginRight: "20%" }}
        alt={"BRAidLogo"}
      />

      <div className={styles.bannerContent}>
        <DropDown
          title="Health"
          items={["Medication", "Injury", "Emergencies"]}
        />
        <DropDown
          title="Housing"
          items={["Shelters", "Temporary Housing", "Permanent Housing"]}
        />
        <DropDown
          title="Food"
          items={[
            "24 Hour Food Banks",
            "Food assistances programs",
            "Emergencies",
          ]}
        />
      </div>
      <span
        id={styles.profileIcon}
        onClick={() => setShowSignUp(toggleState(showSignUp))}
      >
        <FontAwesomeIcon icon={faUser} />
        <p>Login?</p>
      </span>
    </div>
  );
};

export default Banner;
