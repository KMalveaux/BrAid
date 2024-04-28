// Third Party Imports

// Local Imports
import styles from "../css/Resources.module.css";
import Banner from "../components/Banner";
import AlternateBanner from "../components/AlternateBanner";

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
      <h1>Resources</h1>
      <p>Here, we list all of our featured resources seperated by section. Want to quickly filter our resources to match your circumstances? Try our survey!</p>
      
      <p>Looking to locate nearby resources instead? Try our interactive Resource Map instead</p>

      {/* You can write a comment within the return by wrapping it in {} */}
    </div>
  );

  // This is a comment outside of the return
};

export default Resources;
