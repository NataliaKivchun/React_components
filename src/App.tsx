import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BurgerMenu, Tabs } from "./components";

export const App = () => {
  return (
    <div className="App">
      <BurgerMenu list={["Item1", "Item2", "Item3"]} />
      <BurgerMenu list={["Item4", "Item5", "Item6", "Item7"]} />
      <Tabs
        tabGroupName="tabsGroupOne"
        tabNames={["Option1", "Option2", "Option3"]}
        tabTexts={["Option one text", "Option two text", "Option three text"]}
      />
      <Tabs
        tabGroupName="tabsGroupTwo"
        tabNames={["Animals", "Plants"]}
        tabTexts={[
          "Dog Cat Mouse Lion Monkey Tiger Cow Horse Elephant Deer Pig",
          "Sunflower Oak Clever Rose Camomile Pine Christmas tree",
        ]}
      />
    </div>
  );
};
