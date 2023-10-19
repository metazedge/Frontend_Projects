import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
         
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <span className="copyright">
        Copyright © 2036 Cyborg Gaming Company. All rights reserved.
      </span>
    </div>
  );
}

export default App;
