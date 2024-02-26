import { useState } from "react";
import styles from "../css/DropDown.module.css";

const DropDown = ({ items }: { items: string[] }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.dropDownWrapper}>
      <button onClick={() => setShowDropdown((prevState) => !prevState)}>
        Trigger DropDown
      </button>
      {showDropdown && (
        <div className={styles.dropDown}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
