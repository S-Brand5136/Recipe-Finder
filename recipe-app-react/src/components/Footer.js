import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer red lighten-2">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="grey-text text-darken-4">Recipe-App inc</h5>
            <p class="grey-text text-darken-4">
              When your bored of the same old meat loaf every night.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="grey-text text-darken-4">
              Links to Dependencies & API Used
            </h5>
            <ul>
              <li>
                <a
                  class="grey-text text-darken-4"
                  href="https://www.themealdb.com/api.php"
                >
                  https://www.themealdb.com/api.php
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-darken-4"
                  href="https://sass-lang.com/"
                >
                  https://sass-lang.com/
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-darken-4"
                  href="https://nodejs.org/en/"
                >
                  https://nodejs.org/en/
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-darken-4"
                  href="https://materializecss.com/"
                >
                  https://materializecss.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright amber accent-4">
        <div class="container grey-text text-darken-4">© 2020 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
