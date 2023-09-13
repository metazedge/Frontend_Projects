import "./Header.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { BiSun, BiMoon } from "react-icons/bi";
const Header = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <img src="./logo.png" alt="logo" />
          <h1>
            meet<span>.</span>
          </h1>

          <div className="link">
            {darkMode ? (
              <BiSun onClick={toggle} />
            ) : (
              <BiMoon onClick={toggle} />
            )}
            <a href="">Overview</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Contact Sales</a>
          </div>
        </div>
        <div className="right">
          <button>Sign up</button>
        </div>
        <div className="menu-icon">
          <BiMenuAltLeft size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
