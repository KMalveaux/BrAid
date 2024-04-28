// Third Party Imports

// Local Imports
import styles from "../css/About.module.css";

/**
 * This represents the resources page of the website.
 * @returns React Component
 */
const Resources = () => {
  return (
    <div className={styles.outerBox}>
      <p id={styles.innerText}>
        This is the resources page. Replace the jsx here to begin work on the
        resources page. <br /> You can access this page for now by going to
        http://localhost:3000/Resources <br />
        There is a css file in the css folder for this file already created.
        Examples of use are included in the code already as className and id.
      </p>
      {/* You can write a comment within the return by wrapping it in {} */}
    </div>
  );

  // This is a comment outside of the return
};

export default Resources;
