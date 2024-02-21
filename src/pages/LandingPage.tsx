import styles from "../css/LandingPage.module.css";
import Banner from "../components/Banner";

const LandingPage = () => {
  return (
    <div className={styles.pageBase}>
      <Banner />
      <p>Landing Page</p>
    </div>
  );
};

export default LandingPage;
