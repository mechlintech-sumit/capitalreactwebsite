import React, { useState } from "react";
import "./App.css";
import SearchAutocomplete from "./Component/SearchAutocomplete";

function App() {
  return (
    <div className="page">
      <div className="tel-box">
        <SearchAutocomplete />
      </div>
    </div>
  );
}

export default App;
