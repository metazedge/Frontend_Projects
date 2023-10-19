import React from "react";
import "./Browse.scss";
const Browse = () => {
  return (
    <div className="featured__wrapper container">

      <div className="featured__container_1">
      <h1>
        <span>Featured</span> Games
      </h1>
     
      <div className="featured_games">
        <div className="item">
          <div className="thumb">
            <img src="./images/featured-01.jpg" alt="" />
            <div className="hover-effect">
              <h6>2.4K Streaming</h6>
            </div>
          </div>
          <h4>
            CS-GO <br />
            <span>249K Downloads</span>
          </h4>
        </div>
        <div className="item">
          <div className="thumb">
            <img src="./images/featured-02.jpg" alt="" />
            <div className="hover-effect">
              <h6>2.4K Streaming</h6>
            </div>
          </div>
          <h4>
            Gamezer
            <br />
            <span>249K Downloads</span>
          </h4>
        </div>

        <div class="item">
          <div class="thumb">
            <img src="./images/featured-03.jpg" alt="" />
            <div class="hover-effect">
              <h6>2.4K Streaming</h6>
            </div>
          </div>
          <h4>
            Island Rusty
            <br />
            <span>249K Downloads</span>
          </h4>
        </div>
      </div>

      </div>
      <div className="top-download">
        <h1 className="tag"><span>Top</span> Downloaded</h1>
        <ul>
          <li>
            <img src="./images/game-01.jpg" alt="" />
            <h4>Fortnite</h4>
            <h6>Sandbox</h6>
          </li>
          <li>
            <img src="./images/game-02.jpg" alt="" />
            <h4>CS-GO</h4>
            <h6>Legendary</h6>
          </li>
          <li>
            <img src="./images/game-03.jpg" alt="" />
            <h4>PubG</h4>
            <h6>Battle Royale</h6>
            
          </li>
        </ul>
      </div>

      {/* <div className="start-stream">
        <h1><span>How to Start Your</span>Live Stream</h1>

        <div className="service">
          <img src="./images/service-01.jpg" alt="" />
        <h4>Go To Your Profile</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis quaerat placeat, et quis eveniet ratione earum enim inventore cum amet consequatur optio laboriosam? Culpa eligendi molestiae facere possimus temporibus?</p>
        </div>
      </div> */}
    </div>
  );
};

export default Browse;
