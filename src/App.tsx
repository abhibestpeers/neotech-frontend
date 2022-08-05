import React from 'react';
import Navbar from './Layouts/Navbar'
import Listing from './Components/Listing'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Listing/>
      </header>
    </div>
  );
}

export default App;
