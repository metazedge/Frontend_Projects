import React from "react";
import GamingLibrary from "../../components/GamingLibrary/GamingLibrary";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profile__wrapper container">
      <div className="profile__container">
        <img src="./images/profile.jpg" alt="profile image" />
        <div className="info">
          <span className="offline">Offline</span>
          <h4>Alan Smithee</h4>
          <p>
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>

          <a href="#">Start Live Stream</a>
        </div>

        <div className="items">
          <ul>
            <li>
              Games Downloaded <span>3</span>
            </li>
            <hr />
            <li>
              Friends Online <span>16</span>
            </li>
            <hr />
            <li>
              Live Streams <span>None</span>
            </li>
            <hr />
            <li>
              Clips <span>29</span>
            </li>
          </ul>
        </div>
      </div>
      <GamingLibrary />
    </div>
  );
};

export default Profile;
