import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <main className={"main container"}>
            <AllRoutes/>
        </main>
    </div>
  );
}

export default App;
