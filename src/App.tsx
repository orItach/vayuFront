import logo from './logo.svg';
import './App.css';
import { ListView } from "./ListView/index.tsx"
import React from "react"

const App=()=>{
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <ListView/>
    </div>
  );
}

export default App;
