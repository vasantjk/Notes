import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { AlertContext } from "./context";
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppAlert = ({ children }) => {
  const [state, setState] = useState({
    open: false,
    severity: "",
    msg: "",
    vertical: "",
    horizontal: "",
  });
  const handleClose = () => {
    setState({
      open: false,
      severity: "",
      msg: "",
      vertical: "",
      horizontal: "",
    });
  };
  const handleSetAlert = (props) => {
    setState({ ...props });
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onclose: handleClose,
        setSnack: handleSetAlert,
      }}
    >
      {state.open && (
        <Snackbar
          open={state.open}
          autoHideDuration={2000}
          onClose={() => handleClose()}
        >
          <Alert
            onClose={() => handleClose()}
            severity={state.severity}
            sx={{ width: "100%" }}
          >
            {state.msg}
          </Alert>
        </Snackbar>
      )}

      {children}
    </AlertContext.Provider>
  );
};

export default AppAlert;
