import React from "react";
import "./GamingLibrary.scss";
const GamingLibrary = () => {
  return (
    <div className="gaming__wrapper">
      <h1>
        Your Gaming <span>Library</span>
      </h1>
      <div className="item">
        <ul>
          <li>
            <img
              src="./images/game-01.jpg"
              alt=""
              className="templatemo-item"
            />
          </li>
          <li>
            <h4>Dota 2</h4>
            <span>Sandbox</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>24/08/2036</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>634 H 22 Mins</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>Downloaded</span>
          </li>
          <li>
            <button>Downloaded</button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="item">
        <ul>
          <li>
            <img
              src="./images/game-02.jpg"
              alt=""
              className="templatemo-item"
            />
          </li>
          <li>
            <h4>Dota 2</h4>
            <span>Sandbox</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>24/08/2036</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>634 H 22 Mins</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>Downloaded</span>
          </li>
          <li>
            <button>Downloaded</button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="item">
        <ul>
          <li>
            <img
              src="./images/game-03.jpg"
              alt=""
              className="templatemo-item"
            />
          </li>
          <li>
            <h4>Dota 2</h4>
            <span>Sandbox</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>24/08/2036</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>634 H 22 Mins</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>Downloaded</span>
          </li>
          <li>
            <button>Downloaded</button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="game-btn">
        <button className="game_btn">View Your Library</button>
      </div>
    </div>
  );
};

export default GamingLibrary;
