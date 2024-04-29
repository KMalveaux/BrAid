// Third Party Imports
import { useEffect, useState } from "react";
// Local Imports
import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";
import AlternateBanner from "../components/AlternateBanner";
import Filters from "../components/Filters";
import Survey from "../components/Survey";
import InteractiveMap from "../components/InteractiveMap";

import toggleState from "../functions/stateToggler";
const downArrow = require("../images/DownArrow.png");
/**
 * Represents the Home page, the default page of the website
 * @returns React Component
 */
const LandingPage = () => {
  const [showSurvey, setShowSurvey] = useState<boolean>(false);
  const [filterStates, setFilterStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Callback function to handle checkbox change for each filter
  const handleCheckboxChange = (filterName: string, isChecked: boolean) => {
    setFilterStates((prevState) => ({
      ...prevState,
      [filterName]: isChecked,
    }));
  };

  // Determine the value of showList based on the state of all checkboxes
  const showList = Object.values(filterStates).some((state) => state);

  return (
    <div className={styles.pageBase}>
      <div className={styles.pageBaseBefore}>
        <AlternateBanner />
        {showSurvey ? <Survey onClose={() => setShowSurvey(false)} /> : <></>}

        <div className={styles.pageContent}>
          <div className={styles.imageContainer}>
            <div id={styles.introductionPlate}>
              <p style={{ fontWeight: "600", fontSize: "2em" }}>Welcome</p>
              <p
                style={{
                  fontSize: "24px",
                  width: "40%",
                  textAlign: "center",
                }}
              >
                Are you experiencing houselessness in Baton Rouge? Help is only
                a click away - let us locate resources tailored for YOU!
              </p>
              <p
                id={styles.confusedButton}
                onClick={() => setShowSurvey(toggleState(showSurvey))}
              >
                Start Here
              </p>
            </div>
          </div>
          <p
            style={{
              paddingLeft: "5%",
              paddingBottom: "3%",
              fontWeight: "600",
              fontSize: "4em",
              color: "white",
            }}
          >
            Resource Map
          </p>
          <div className={styles.localResources}>
            <div id={styles.filtersContainer}>
              <Filters
                title="Health"
                filters={["Mens", "Womens", "Youth"]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Food"
                filters={["Breakfast", "Lunch", "Dinner"]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Safety"
                filters={["Police", "Fire", "Medical"]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Medical"
                filters={["Substance Abuse", "Fire", "Medical"]}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>

            <InteractiveMap />
          </div>
          <div className={styles.selectablePlacesContainer}>
            {showList ? <p>Hello</p> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
