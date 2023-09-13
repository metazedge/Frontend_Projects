import React, { useContext } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className="App">
      <div className={`theme-${darkMode ? "dark": "light"}`}>
        <Header />
        <Hero />
      </div>
     </div>
  );
}

export default App;



