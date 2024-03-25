// Local Imports
import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";
import Filters from "../components/Filters";
import Survey from "../components/Survey";
import { MouseEventHandler, useState } from "react";

const downArrow = require("../images/DownArrow.png");

const LandingPage = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const surveyButtonFunc: MouseEventHandler<HTMLParagraphElement> = (event) => {
    setShowSurvey((prevState) => !prevState);
  };

  return (
    <div className={styles.pageBase}>
      <Banner />
      {showSurvey ? <Survey onClose={() => setShowSurvey(false)} /> : <></>}
      <div className={styles.pageContent}>
        <div className={styles.imageContainer}>
          <div id={styles.introductionPlate}>
            <p>Welcome to B+RAid</p>
            <p
              style={{
                fontSize: "24px",
                paddingTop: "10%",
                width: "70%",
              }}
            >
              A community dedicated to helping the homeless of Baton Rouge
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              top: "-30%",
              width: "30%",
              alignSelf: "flex-end",
            }}
          >
            <p id={styles.confusedButton} onClick={surveyButtonFunc}>
              I'm new!
            </p>
            <p id={styles.emergencyButton}>I have an emergency!</p>
          </div>
          <img
            id={styles.downArrow}
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            src={downArrow}
            alt="Down Arrow"
          />
        </div>
        <p>Local Resources</p>
        <div className={styles.localResources}>
          <div id={styles.filtersContainer}>
            <Filters title="Health" filters={["Mens", "Womens", "Youth"]} />
            <Filters title="Food" filters={["Breakfast", "Lunch", "Dinner"]} />
            <Filters title="Safety" filters={["Police", "Fire", "Medical"]} />
          </div>

          <iframe
            src="https://umap.openstreetmap.fr/en/map/braid-map-wip_1040730#16/30.4459/-91.1632"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
