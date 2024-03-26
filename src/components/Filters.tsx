// Third Party Imports
import { useState } from "react";

// Local Imports
import styles from "../css/Filters.module.css";

interface Props {
  title: string;
  filters: string[];
}

/**
 * Represents the selectable filters that should adjust the points displayed on the interactive map
 *
 * @param title The word listed as the drop down's header
 * @param filters[]  An string array of items to be listed as selectable filters under the drop down
 * @returns React Component
 */
const Filters: React.FC<Props> = ({ title, filters }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <button
        id={styles.filterDropDown}
        onClick={() => setShowDropdown((prevState) => !prevState)}
      >
        {title}
      </button>
      {showDropdown && (
        <ul>
          {filters.map((filter, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                <span id={styles.listItemm}>{filter}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
