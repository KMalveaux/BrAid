// Third Party Imports
import { useEffect, useState } from "react";
// Local Imports
import styles from "../css/LandingPage.module.css";
import AlternateBanner from "../components/AlternateBanner";
import Filters from "../components/Filters";
import Survey from "../components/Survey";
import InteractiveMap from "../components/InteractiveMap";
import PointsOfInterest from "../components/PointOfInterest";

import toggleState from "../functions/stateToggler";
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
  const [username, setUsername] = useState<string | null>(null);

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

  const handleAssignUsername = (assignedUsername: string) => {
    setUsername(assignedUsername);
  };

  useEffect(() => {
    const fetchUserAccountSurveyResponse = async () => {
      try {
        const response = await fetch("/getSurveyResults", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username }),
        });

        if (response.ok) {
          const data = await response.json();
          handleCompletedSurvey(data);
        } else {
          console.error("Error fetching survey results");
        }
      } catch (error) {
        console.error("Error fetching survey results:", error);
      }
    };

    fetchUserAccountSurveyResponse();
  }, [username]);

  const handleCompletedSurvey = (answers: boolean[]) => {
    setFilterStates((prevState) => {
      // Create a copy of the previous state
      const nextState = { ...prevState };

      if (answers[1]) {
        nextState["housingYouth"] = true;
      } else {
        delete nextState["housingYouth"];
      }
      if (answers[2]) {
        nextState["housingMale"] = true;
      } else {
        delete nextState["housingMale"];
      }

      if (answers[3]) {
        nextState["housingFemale"] = true;
      } else {
        delete nextState["housingFemale"];
      }

      if (answers[4]) {
        nextState["housingGenderInclusive"] = true;
      } else {
        delete nextState["housingGenderInclusive"];
      }

      if (answers[5]) {
        nextState["formerlyIncarcerated"] = true;
      } else {
        delete nextState["formerlyIncarcerated"];
      }
      if (answers[6]) {
        nextState["foodAssistance"] = true;
        nextState["sandwiches"] = true;
      } else {
        delete nextState["foodAssistance"];
        delete nextState["sandwiches"];
      }
      if (answers[7]) {
        nextState["fruit"] = true;
        nextState["vegetables"] = true;
      } else {
        delete nextState["fruit"];
        delete nextState["vegetables"];
      }
      if (answers[8]) {
        nextState["cannedGoods"] = true;
      } else {
        delete nextState["cannedGoods"];
      }
      if (answers[9]) {
        nextState["housingGenderInclusive"] = true;
      } else {
        delete nextState["housingGenderInclusive"];
      }
      if (answers[10]) {
        nextState["lunch"] = true;
        nextState["dinner"] = true;
      } else {
        delete nextState["lunch"];
        delete nextState["dinner"];
      }
      if (answers[11] && answers[2]) {
        nextState["domesticViolenceMale"] = true;
      } else {
        delete nextState["domesticViolenceMale"];
      }
      if (answers[11] && answers[3]) {
        nextState["domesticViolenceFemale"] = true;
      } else {
        delete nextState["domesticViolenceFemale"];
      }
      if (answers[11] && answers[1]) {
        nextState["domesticViolenceYouth"] = true;
      } else {
        delete nextState["domesticViolenceYouth"];
      }
      if (answers[12]) {
        nextState["counseling"] = true;
      } else {
        delete nextState["counseling"];
      }
      if (answers[13]) {
        nextState["substanceAbuse"] = true;
      } else {
        delete nextState["substanceAbuse"];
      }
      if (answers[14]) {
        // Currently Filler
      }
      if (answers[15]) {
        nextState["dentalServices"] = true;
      } else {
        delete nextState["dentalServices"];
      }
      if (answers[16]) {
        nextState["hygiene"] = true;
      } else {
        delete nextState["hygiene"];
      }
      if (answers[17]) {
        nextState["clothing"] = true;
      } else {
        delete nextState["clothing"];
      }

      return nextState;
    });
  };

  type TravelModeType = "WALKING" | "BICYCLING" | "DRIVING";

  const [selectedTravelMode, setSelectedTravelMode] =
    useState<TravelModeType>("WALKING");
  const handleTravelModeChange = (selectedMode: TravelModeType) => {
    setSelectedTravelMode(selectedMode);
  };

  // Determine the value of showList based on the state of all checkboxes
  const showList = Object.values(filterStates).some((state) => state);

  return (
    <div className={styles.pageBase}>
      <div className={styles.pageBaseBefore}>
        <AlternateBanner
          setUsernameInLandingPage={handleAssignUsername}
          onSurveyResultsFetch={handleCompletedSurvey}
        />
        {showSurvey ? (
          <Survey
            onClose={() => setShowSurvey(false)}
            signedIn={username ? true : false}
            onSurveyFinish={handleCompletedSurvey}
          />
        ) : (
          <></>
        )}

        <div className={styles.pageContent}>
          <div className={styles.imageContainer}>
            <div id={styles.introductionPlate}>
              <p style={{ fontWeight: "600", fontSize: "2em" }}>Welcome</p>
              <p
                style={{ fontSize: "24px", width: "60%", textAlign: "center" }}
              >
                {username === null ? (
                  "Are you experiencing houselessness in Baton Rouge? Help is only a click away - let us locate resources tailored for YOU!"
                ) : (
                  <>
                    Hello <span style={{ fontWeight: "bold" }}>{username}</span>
                  </>
                )}
              </p>

              <p
                id={styles.confusedButton}
                onClick={() => setShowSurvey(toggleState(showSurvey))}
              >
                {username === null ? "Start Here" : "Retake Survey?"}
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
                title="Shelter"
                filters={[
                  "housingMale",
                  "housingFemale",
                  "housingYouth",
                  "housingGenderInclusive",
                  "formerlyIncarcerated",
                  "jobAssistance",
                  "rehabilitation",
                ]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Food"
                filters={[
                  "foodAssistance",
                  "fruit",
                  "vegetables",
                  "sandwiches",
                  "cannedGoods",
                  "lunch",
                  "dinner",
                ]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Safety"
                filters={[
                  "domesticViolenceMale",
                  "domesticViolenceFemale",
                  "domesticViolenceYouth",
                  "domesticViolenceFamily",
                  "counseling",
                  "legalServices",
                ]}
                onCheckboxChange={handleCheckboxChange}
              />
              <Filters
                title="Medical"
                filters={[
                  "substanceAbuse",
                  "dentalServices",
                  "hygiene",
                  "clothing",
                ]}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>

            <InteractiveMap
              latitude={coordinatesLAT}
              longitude={coordinatesLONG}
              selectedMode={selectedTravelMode}
            />
            <div className={styles.travelMethodContainer}>
              <label htmlFor="walking">
                <input
                  type="radio"
                  name="travelMode"
                  id="walking"
                  value="WALKING"
                  onChange={(e) =>
                    handleTravelModeChange(
                      (e.target as HTMLInputElement).value as TravelModeType
                    )
                  }
                />
                Walking
              </label>
              <label htmlFor="biking">
                <input
                  type="radio"
                  name="travelMode"
                  id="biking"
                  value="BICYCLING"
                  onChange={(e) =>
                    handleTravelModeChange(
                      (e.target as HTMLInputElement).value as TravelModeType
                    )
                  }
                />
                Biking
              </label>
              <label htmlFor="driving">
                <input
                  type="radio"
                  name="travelMode"
                  id="driving"
                  value="DRIVING"
                  onChange={(e) =>
                    handleTravelModeChange(
                      (e.target as HTMLInputElement).value as TravelModeType
                    )
                  }
                />
                Driving
              </label>
            </div>
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
