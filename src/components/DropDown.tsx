import { useState } from "react";
import styles from "../css/DropDown.module.css";

interface Props {
  title: string;
  items: string[];
}

/**
 * Represents a drop down menu to be used on a banner
 *
 * @param title The word listed as the drop down's header
 * @param items A string array that contains each item to be listed under the dropdown as a list element
 * @returns React Component
 */
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
