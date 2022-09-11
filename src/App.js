// import { Button } from "@mui/material";
// import AppAlert from "./App.alert";
// import Sample from "./sample";
import React from "react";
import MainScreen from "./screens/home";
// import { reducer, initialState } from "./reducer";
function App() {
  // const [form, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <AppAlert>
        <Sample />
      </AppAlert>
      <input
        type="text"
        value={form.text}
        onChange={(e) => dispatch({ type: "INPUT", payload: e.target.value })}
      ></input>
      <select
        value={form.dropdown}
        onChange={(e) =>
          dispatch({ type: "DROPDOWN", payload: e.target.value })
        }
      >
        <option value="audi">AUDI</option>
        <option value="bmw">BMW</option>
        <option value="benz">BENZ</option>
        <option value="mini">MINI</option>
      </select>
      <Button variant="outlined">Increment</Button>
      <Button variant="outlined">Decrement</Button> */}
      <MainScreen />
    </div>
  );
}

export default App;
