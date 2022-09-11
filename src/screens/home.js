// * NPM PACKAGE DEPENDENCIES
import React from "react";
import CssIcon from "@mui/icons-material/Css";
import Navbar from "../Navbar";
import "./home.css";
import Card from "../components/Card";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";

// ? Tab Labels
// TODO: If Needed New Label Add The Label Name Here It Will Automatically Add Tab List
const ListLabels = ["REACT JS", "NODE JS", "HTML", "CSS", "JAVASCRIPT"];
const ListIcon = [
  <CssIcon fontSize="large" />,
  <JavascriptIcon fontSize="large" />,
  <HtmlIcon fontSize="large" />,
  <CssIcon fontSize="large" />,
  <JavascriptIcon fontSize="large" />,
];

const MainScreen = () => {
  //* UseState Initialization
  const [selectedItem, setSelectedItem] = React.useState(0);
  // * Return Tabs
  const RenderTabLabel = () => {
    return ListLabels.map((list, index) => (
      <div
        id="ListItemButton"
        key={list + index}
        onClick={() => setSelectedItem(index)}
      >
        <div
          className="IconText"
          style={{
            backgroundColor: selectedItem === index && " rgba(0, 0, 0, 0.4) ",
          }}
        >
          <div>{ListIcon[index]}</div>
          <span className="ListItem">{list}</span>
        </div>
      </div>
    ));
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="MainBox">
        <div className="SidePanel">
          <ul className="ListText">{RenderTabLabel()}</ul>
        </div>
        <div className="MainPanel">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "0 0 5px 0",
            }}
          >
            <button>Add New</button>
          </div>
          <div className="ResCard">
            {["1", "2", "3", "4"].map((list, index) => (
              <Card key={list + index} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainScreen;
