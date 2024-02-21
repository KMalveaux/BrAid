import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";

const RadioTower = require("../images/RadioTower.jpg");

const LandingPage = () => {
  return (
    <div className={styles.pageBase}>
      <Banner />
      <div className={styles.pageContent}>
        <div className={styles.imageContainer}>
          <p>Welcome to B+rAid</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
