import React, { useState } from "react";

// MaterialUI imports
import { Collapse, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const SearchError = ({ message, variant, open }) => {
  const [openAlert, setOpenAlert] = useState(open);

  setTimeout(() => {
    setOpenAlert(false);
  }, 3000);

  return (
    <div>
      <Collapse in={openAlert}>
        <Alert
          style={{ width: "75%" }}
          variant="filled"
          severity={variant}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </div>
  );
};

export default SearchError;
