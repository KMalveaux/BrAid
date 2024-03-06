// Local Imports
import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";
import Filters from "../components/Filters";

const downArrow = require("../images/DownArrow.png");

const LandingPage = () => {
  return (
    <div className={styles.pageBase}>
      <Banner />
      <div className={styles.pageContent}>
        <div className={styles.imageContainer}>
          <div id={styles.introductionPlate}>
            <p>Welcome to B+rAid</p>
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
              alignSelf: "flex-end",
            }}
          >
            <p id={styles.confusedButton}>I'm new!</p>
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
            <Filters title="Health" items={["Mens", "Womens", "Youth"]} />
            <Filters title="Food" items={["Breakfast", "Lunch", "Dinner"]} />
            <Filters title="Safety" items={["Police", "Fire", "Medical"]} />
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d27521.92424640863!2d-91.18472174475097!3d30.429282643001827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d30.407947099999998!2d-91.1799602!4m5!1s0x8626a120c702007d%3A0x115c5b58d10c6be9!2sSt.%20Vincent%20de%20Paul%20Bishop%20Ott%20Sweet%20Dreams%20Shelter%2C%201623%20Convention%20St%2C%20Baton%20Rouge%2C%20LA%2070802!3m2!1d30.4488037!2d-91.1722853!5e0!3m2!1sen!2sus!4v1708982932922!5m2!1sen!2sus"
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
