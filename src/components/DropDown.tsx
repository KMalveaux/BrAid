import { useState } from "react";
import styles from "../css/DropDown.module.css";

interface Props {
  title: string;
  items: string[];
}

const DropDown: React.FC<Props> = ({ title, items }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.dropDownWrapper}>
      <button
        onClick={() => setShowDropdown((prevState) => !prevState)}
        id={styles.button}
      >
        {title}
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
