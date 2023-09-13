import { useContext } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import { DarkModeContext } from "./context/DarkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="App" style={{background: darkMode ? "#1B2026": "#a5aeb6", height: "120vh"}}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Header />

        <Hero />
      </div>
    </div>
  );
}

export default App;
