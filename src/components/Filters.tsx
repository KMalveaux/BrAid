import styles from "../css/Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filtersContainer}>
      <h1>Food</h1>
      <ul>
        <li>Filter 1</li>
        <li>Filter 2</li>
        <li>Filter 3</li>
        <li>Filter 4</li>
      </ul>
      <h1>Health</h1>
      <ul>
        <li>Filter 1</li>
        <li>Filter 2</li>
        <li>Filter 3</li>
        <li>Filter 4</li>
      </ul>
    </div>
  );
};

export default Filters;
