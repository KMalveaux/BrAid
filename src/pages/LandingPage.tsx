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

  return (
    <div className={styles.pageBase}>
      <AlternateBanner />
      {showSurvey ? <Survey onClose={() => setShowSurvey(false)} /> : <></>}

      <div className={styles.pageContent}>
        <img id={styles.homeDecor} src ={require("../images/homeDecor-8.png")} alt =""/>
        <div className={styles.imageContainer}>
          <div id={styles.introductionPlate}>
            <h1>Welcome</h1>
            <p>Are you experiencing houselessness in Baton Rouge? Help is only a click away - let us locate resources tailored for YOU!</p>
            <p
              id={styles.primaryButton}
              onClick={() => setShowSurvey(toggleState(showSurvey))}
            >
              Start Here
            </p>
          </div>
          {/*<img id={styles.downArrow} onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })} src={downArrow} alt="Down Arrow"/>*/}
        </div>
       <h2>Resource Map</h2>

        <div className={styles.localResources}>
          <div id={styles.filtersContainer}>
            <div>
              <h3><Filters title="Filters" filters={[]} /></h3>
              <img id={styles.filterIcon} src={require("../images/Asset 5-8.png")} alt=""/>
            </div>
            <Filters title="Health" filters={["Mens", "Womens", "Youth"]} />
            <Filters title="Food" filters={["Breakfast", "Lunch", "Dinner"]} />
            <Filters title="Safety" filters={["Police", "Fire", "Medical"]} />
            <Filters title="Medical" filters={["Substance Abuse", "Fire", "Medical"]}/>
          </div>

          {/**<iframe width="500" height="300" src={`https://api.maptiler.com/maps/streets-v2/?key=luH2YK5xc1LO68H8dnde#0.6/-12.90907/-22.54736`}></iframe>*/}
          <InteractiveMap />
        </div>
        <div className={styles.selectablePlacesContainer}>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
