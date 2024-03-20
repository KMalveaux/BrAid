// Third Party Imports
import { useState } from "react";

// Local Imports
import styles from "../css/Filters.module.css";

interface Props {
  title: string;
  filters: string[];
}

/**
 *
 * @param title The title of the dropdown
 * @param filters[]  An array of filters to be displayed as a list in the drop down UI
 * @returns JSX.Element representing an expandable dropdown menu containing filters
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
