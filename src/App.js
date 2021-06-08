import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Favourite from "./Favourite";
import ListOfNames from "./ListOfNames";
// import BabyNames from "./BabyNames.json";
import Search from "./Search";


function App() {
  const [searchVal, setSearchVal] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="App">
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <h3>Your Favourite are:</h3>
      <Favourite favourites={favourites} setFavourites={setFavourites} />
      <h2>choice from this list</h2>
      <ListOfNames searchVal={searchVal}
        favourites={favourites} setFavourites={setFavourites} />
    </div>
  );
}

export default App;
