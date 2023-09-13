import CountUp from "react-countup";
import "./Hero.scss";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="hero container">
      <div className="hero__container">
        <div className="hero__left">
          <h1>
            Modern <br />
            /Minimal <br />
            Design
          </h1>
          <p>
            Your house has manu functions,
            <br /> which require that its devices be ergonomic. <br /> This is
            where the role of an architect begins.
          </p>
          <div className="hero__btn">
            <button>Read more</button>
            <div className="hero__svg">
              <svg
                style={{ fill: "#ffffff", background: "none" }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </div>
          </div>
          <div className="hero__count">
            <CountUp className="count" end={30} duration={5} />
            <p className="word">PROJECT YEAR</p>
          </div>
        </div>
        <div className="hero__right">
          {darkMode ? (
            <img src="dh_img.jpg" alt="dark image" />
          ) : (
            <img src="lh_img.jpg" alt="light image" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
