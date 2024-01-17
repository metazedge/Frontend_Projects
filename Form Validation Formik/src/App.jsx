import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
