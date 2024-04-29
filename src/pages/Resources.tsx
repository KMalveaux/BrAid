/*// Third Party Imports

// Local Imports
import styles from "../css/Resources.module.css";
import Banner from "../components/Banner";
import AlternateBanner from "../components/AlternateBanner";

/**
 * This represents the resources page of the website.
 * @returns React Component
 
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
      <h1>B+RAid Resource Lis</h1>
      <p>Here, we list all of our featured resources seperated by section. Want to quickly filter our resources to match your circumstances? Try our survey!</p>
      
      <p>Looking to locate nearby resources instead? Try our interactive Resource Map instead</p>

      <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>B+RAid Resource List</title>
            <style>
              .popup {
                position: absolute;
                display: none;
                background-color: #f9f9f9;
                border: 1px solid #ccc;
                padding: 10px;
                z-index: 1;
                top: 0;
                left: calc(100% + 10px);
                transform: translateY(-50%);
                min-width: 200px;
              }
            </style>
          </head>
          
          <body>
            <h3>Food</h3>
            <ul>
              <li><span class="resource" data-popup="popup1">St. Vincent De Paul Dining Room</span><div class="popup" id="popup1">Information and links for St. Vincent De Paul Dining Room</div></li>
              <li><span class="resource" data-popup="popup2">Community Fridge (The Red Shoes)</span><div class="popup" id="popup2">Information and links for Community Fridge (The Red Shoes)</div></li>
              <li><span class="resource" data-popup="popup3">Community Fridge (at Yes We Cannibal)</span><div class="popup" id="popup3">Information and links for Community Fridge (at Yes We Cannibal)</div></li>
              <li><span class="resource" data-popup="popup4">Community Fridge (Delmont Gardens Branch Library)</span><div class="popup" id="popup4">Information and links for Community Fridge (Delmont Gardens Branch Library)</div></li>
              <li><span class="resource" data-popup="popup5">Greater Baton Rouge Food Bank</span><div class="popup" id="popup5">Information and links for Greater Baton Rouge Food Bank</div></li>
              <li><span class="resource" data-popup="popup6">Holy Gril from Interfaith Federation of Greater Baton Rouge</span><div class="popup" id="popup6">Information and links for Holy Gril from Interfaith Federation of Greater Baton Rouge</div></li>
              <li><span class="resource" data-popup="popup7">Scott-Gilchrist Quality of Life Center at Bethel A.M. E</span><div class="popup" id="popup7">Information and links for Scott-Gilchrist Quality of Life Center at Bethel A.M. E</div></li>
            </ul>
          
            <h3>Health</h3>
            <ul>
              <li><span class="resource" data-popup="popup8">The Bridge Center for Hope</span><div class="popup" id="popup8">Information and links for The Bridge Center for Hope</div></li>
              <li><span class="resource" data-popup="popup9">St. Vincent de Paul Community Pharmacy</span><div class="popup" id="popup9">Information and links for St. Vincent de Paul Community Pharmacy</div></li>
              <li><span class="resource" data-popup="popup10">Open Health Care Clinic</span><div class="popup" id="popup10">Information and links for Open Health Care Clinic</div></li>
              <li><span class="resource" data-popup="popup11">Eternal Crisis Outreach</span><div class="popup" id="popup11">Information and links for Eternal Crisis Outreach</div></li>
              <li><span class="resource" data-popup="popup12">Maison des Amis</span><div class="popup" id="popup12">Information and links for Maison des Amis</div></li>
              <li><span class="resource" data-popup="popup13">O'Brien House</span><div class="popup" id="popup13">Information and links for O'Brien House</div></li>
            </ul>
          
            <h3>Domestic Violence</h3>
            <ul>
              <li><span class="resource" data-popup="popup14">Iris Domestic Violence Center</span><div class="popup" id="popup14">Information and links for Iris Domestic Violence Center</div></li>
              <li><span class="resource" data-popup="popup15">STAR: Sexual Trauma Awareness and Response</span><div class="popup" id="popup15">Information and links for STAR: Sexual Trauma Awareness and Response</div></li>
              <li><span class="resource" data-popup="popup16">Capital Area Family Justice Center</span><div class="popup" id="popup16">Information and links for Capital Area Family Justice Center</div></li>
            </ul>
          
            <h3>Men's Shelters</h3>
            <ul>
              <li><span class="resource" data-popup="popup17">Catholic Charities Baton Rouge Joseph Homes - Catholic Prison Ministries Coalition</span><div class="popup" id="popup17">Information and links for Catholic Charities Baton Rouge Joseph Homes - Catholic Prison Ministries Coalition</div></li>
              <li><span class="resource" data-popup="popup18">Bishop Ott Shelter for Men (St. Vincent de Paul)</span><div class="popup" id="popup18">Information and links for Bishop Ott Shelter for Men (St. Vincent de Paul)</div></li>
              <li><span class="resource" data-popup="popup19">The Salvation Army</span><div class="popup" id="popup19">Information and links for The Salvation Army</div></li>
              <li><span class="resource" data-popup="popup20">Living Waters Outreach Ministry</span><div class="popup" id="popup20">Information and links for Living Waters Outreach Ministry</div></li>
              <li><span class="resource" data-popup="popup21">One Touch Ministry</span><div class="popup" id="popup21">Information and links for One Touch Ministry</div></li>
              <li><span class="resource" data-popup="popup22">Volunteers of America South Central Louisiana</span><div class="popup" id="popup22">Information and links for Volunteers of America South Central Louisiana</div></li>
            </ul>
          
            <h3>Women's Shelters</h3>
            <ul>
              <li><span class="resource" data-popup="popup23">St. Agnes BR - Missionaries of Charity Shelter and Soup Kitchen</span><div class="popup" id="popup23">Information and links for St. Agnes BR - Missionaries of Charity Shelter and Soup Kitchen</div></li>
              <li><span class="resource" data-popup="popup24">Bishop Ott Shelter for Women and Children (St. Vincent de Paul)</span><div class="popup" id="popup24">Information and links for Bishop Ott Shelter for Women and Children (St. Vincent de Paul)</div></li>
              <li><span class="resource" data-popup="popup25">One Touch Ministry</span><div class="popup" id="popup25">Information and links for One Touch Ministry</div></li>
              <li><span class="resource" data-popup="popup26">Volunteers of America South Central Louisiana</span><div class="popup" id="popup26">Information and links for Volunteers of America South Central Louisiana</div></li>
            </ul>
          
            <h3>Youth's Shelters</h3>
            <ul>
              <li><span class="resource" data-popup="popup27">Youth Oasis</span><div class="popup" id="popup27">Information and links for Youth Oasis</div></li>
              <li><span class="resource" data-popup="popup28">Empower 225</span><div class="popup" id="popup28">Information and links for Empower 225</div></li>
            </ul>
          
            <script>
              document.addEventListener('DOMContentLoaded', function() {
                const resources = document.querySelectorAll('.resource');
                let currentPopup = null;
          
                resources.forEach(resource => {
                  resource.addEventListener('click', function() {
                    const popupId = this.dataset.popup;
                    const popup = document.getElementById(popupId);
                    const rect = this.getBoundingClientRect(); // Get position of the resource
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
                    popup.style.top = `${rect.top + scrollTop}px`; // Position the popup at the top of the resource
                    popup.style.left = `${rect.right + scrollLeft + 10}px`; // Position the popup to the right of the resource
                    if (currentPopup) {
                      currentPopup.style.display = 'none';
                    }
                    if (currentPopup !== popup) {
                      popup.style.display = 'block';
                      currentPopup = popup;
                    } else {
                      currentPopup = null;
                    }
                  });
                });
          
                document.addEventListener('click', function(event) {
                  const clickedElement = event.target;
                  if (!clickedElement.classList.contains('resource') && !clickedElement.closest('.popup')) {
                    if (currentPopup) {
                      currentPopup.style.display = 'none';
                      currentPopup = null;
                    }
                  }
                });
              });
            </script>
          </body>
    </div>
  );

  // This is a comment outside of the return
};

export default Resources; */
