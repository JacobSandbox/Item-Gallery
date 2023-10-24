// Main app component
// Created by Jacob salemi - Oct, 2023
import React from "react";
import {CreateCard} from "./Card";
import itemList from "../items";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "./Popup";

function App() {
  return (
    <div>
      <Header />
      <div className="gallery">
        {itemList.map ( item => CreateCard(item) )}
      </div>
      <Footer />

      <div id="overlay"></div>
      <Popup content="???" />
    </div>
  );
}

export default App;
