import React from "react";
import Navbar from "./Layouts/Navbar";
import Listing from "./Components/Listing";
import AddEmployee from "./Components/AddEmployee";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Listing />
      </header>
    </div>
  );
}

export default App;
