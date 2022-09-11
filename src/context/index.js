import { createContext } from "react";
export let AlertContext = createContext({
  open: false,
  severity: "",
  msg: "",
  vertical: "",
  horizontal: "",
  onclose: () => null,
  setSnack: () => null,
});
