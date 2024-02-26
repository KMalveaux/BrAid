import styles from "../css/Banner.module.css";
import DropDown from "./DropDown";

const Banner = () => {
  return (
    <div className={styles.bannerBase}>
      <div className={styles.bannerContent}>
        <DropDown items={["Item 1", "Item 2", "Item 3"]} />
        <p>button 1</p>
        <p>button 2</p>
        <p>button 3</p>
      </div>
    </div>
  );
};

export default Banner;
