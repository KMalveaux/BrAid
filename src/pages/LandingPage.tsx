// Third Party Imports
import { useEffect, useState } from "react";
// Local Imports
import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";
import AlternateBanner from "../components/AlternateBanner";
import Filters from "../components/Filters";
import Survey from "../components/Survey";
import InteractiveMap from "../components/InteractiveMap";
import PointsOfInterest from "../components/PointOfInterest";

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

  const [selectedPointOfInterest, setPointOfInterest] = useState<string | null>(
    null
  );

  const [coordinatesLAT, setCoordinatesLAT] = useState<number | null>(null);
  const [coordinatesLONG, setCoordinatesLONG] = useState<number | null>(null);

  // Callback function to handle checkbox change for each filter
  const handleCheckboxChange = (filterName: string, isChecked: boolean) => {
    setFilterStates((prevState) => {
      // Create a copy of the previous state
      const nextState = { ...prevState };

      // Update the state with the new checkbox value
      nextState[filterName] = isChecked;

      // Remove the filter from the state if it is unchecked
      if (!isChecked) {
        delete nextState[filterName];
      }

      return nextState;
    });
  };

  // Hook to log which filters are active within the state filterStates
  useEffect(() => {
    console.log("Updated filterStates:", filterStates);
    console.log("Selected organization: " + selectedPointOfInterest);
  }, [filterStates, selectedPointOfInterest]);

  useEffect(() => {
    const getMapCoordinatesForSelectedPOI = async () => {
      try {
        if (selectedPointOfInterest == null) {
          return;
        } else {
          const response = await fetch("/pointsOfInterest.json");
          const data = await response.json();
          const { latitude, longitude } = data[selectedPointOfInterest];
          setCoordinatesLAT(latitude);
          setCoordinatesLONG(longitude);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getMapCoordinatesForSelectedPOI();
  }, [selectedPointOfInterest]);

  const handlePointOfInterestSelected = (selectedPOI: string) => {
    setPointOfInterest(selectedPOI);
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
              width: "100%",
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
                filters={[
                  "substanceAbuse",
                  "Fire",
                  "Medical",
                  "dentalServices",
                ]}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>

            <InteractiveMap
              latitude={coordinatesLAT}
              longitude={coordinatesLONG}
            />
          </div>
          <div className={styles.selectablePlacesContainer}>
            {showList ? (
              <PointsOfInterest
                filterKeys={Object.keys(filterStates)}
                onPOISelect={handlePointOfInterestSelected}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
