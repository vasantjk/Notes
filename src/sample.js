import { useContext } from "react";
import { AlertContext } from "./context";
import { Button } from "@mui/material";

const Sample = () => {
  const alert = useContext(AlertContext);
  const handleClicked = () => {
    alert.setSnack({
      open: true,
      severity: "error",
      msg: "Check From Date And To Date",
      vertical: "top",
      horizontal: "right",
    });
  };
  return (
    <div>
      <Button variant="outlined" onClick={() => handleClicked()}>
        Click
      </Button>
    </div>
  );
};
export default Sample;
