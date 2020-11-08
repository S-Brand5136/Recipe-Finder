import React from "react";

// MaterialUI Imports
import { Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer>
      <Typography className="footerBox" variant="p">
        Git Hub Repository -{" "}
        <a className="links" href="https://github.com/S-Brand5136/Recipe-App">
          <GitHub fontSize="large" />
        </a>
      </Typography>
      <div className="custom-shape-divider-bottom-1604625381">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
