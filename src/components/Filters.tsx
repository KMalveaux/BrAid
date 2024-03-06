// Third Party Imports
import { useState } from "react";

// Local Imports
import styles from "../css/Filters.module.css";

interface Props {
  title: string;
  items: string[];
}

const Filters: React.FC<Props> = ({ title, items }: Props) => {
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
          {items.map((item, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                <span id={styles.listItemm}>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filters;
