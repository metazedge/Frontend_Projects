import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
const Header = () => {
  const [IsActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { top: !menuOpened && "-700%" };
    }
  };
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const toggleHamburger = () => {
    setIsActive(!IsActive);
  };
  return (
    <header className="header__wrapper container">
      <div className="header__container">
        <div className="header__left">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="header__right" style={getMenuStyles(menuOpened)}>
          <Link
            to="/"
            onClick={() => handleOptionClick("Home")}
            style={{ color: selectedOption === "Home" ? "#e75e8d" : "initial" }}
          >
            Home
          </Link>
          <Link
            to="/browse"
            onClick={() => handleOptionClick("Browse")}
            style={{
              color: selectedOption === "Browse" ? "#e75e8d" : "initial",
            }}
          >
            Browse
          </Link>

          <Link
            className="profile"
            to="/profile"
            onClick={() => handleOptionClick("Profile")}
            style={{
              color: selectedOption === "Profile" ? "#e75e8d" : "initial",
            }}
          >
            Profile
            <img src="images/profile-header.jpg" alt="" />
          </Link>
        </div>

        <a
          className={`menu_trigger ${IsActive ? "active" : ""}`}
          onClick={() => {
            toggleHamburger();
            toggleMenu();
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </a>
      </div>
    </header>
  );
};

export default Header;
