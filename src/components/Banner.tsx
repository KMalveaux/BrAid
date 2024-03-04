import styles from "../css/Banner.module.css";
import DropDown from "./DropDown";

const Banner = () => {
  return (
    <div className={styles.bannerBase}>
      <img
        src={require("../images/BRAidLogo.png")}
        style={{ marginRight: "20%" }}
        alt={"BRAidLogo"}
      />

      <div className={styles.bannerContent}>
        <DropDown
          title="Health"
          items={["Medication", "Injury", "Emergencies"]}
        />
        <DropDown
          title="Housing"
          items={["Shelters", "Temporary Housing", "Permanent Housing"]}
        />
        <DropDown
          title="Food"
          items={["Medication", "Injury", "Emergencies"]}
        />
      </div>
    </div>
  );
};

export default Banner;
