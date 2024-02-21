import styles from "../css/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerBase}>
      <div className={styles.bannerContent}>
        <p>button 1</p>
        <p>button 2</p>
        <p>button 3</p>
      </div>
    </div>
  );
};

export default Banner;
