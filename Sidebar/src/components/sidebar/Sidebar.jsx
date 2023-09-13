import "./Sidebar.scss";
import {
  HomeIcon,
  ImportContactsIcon,
  InsertChartIcon,
  TrackChangesIcon,
  FavoriteIcon,
  Diversity3Icon,
  AppleIcon,
  FitbitIcon,
  SettingsIcon,
  DarkModeIcon,
  MenuIcon,
} from "../../imports/Imports";
import { motion } from "framer-motion";
import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 100 }}
      animate={{ width: open ? "250px" : "50px" }}
      className="sidebar"
    >
      <div className="sidebar-container">
        <div
          style={{ alignSelf: open ? "inherit" : "center" }}
          className="menu-icon"
          onClick={toggle}
        >
          <MenuIcon />
        </div>
        <div className="profile">
          <img
            style={{
              width: open ? "50px" : "30px",
              height: open ? "50px" : "30px",
            }}
            src="./p_img.jpg"
            alt="profile image"
          />
          <div className="profile-info">
            {open && (
              <>
                <p>Good Morning</p>
                <h1>Jhon Doe</h1>
              </>
            )}
          </div>
        </div>
        <hr className="horizontal-line" />

        <div className="menu">
          {open && <h2>Menu</h2>}

          <div style={{ pointerEvents: open? "inherit": "none" }} className="menu-container">
            <div className="menu-item">
              <HomeIcon />
              {open && <p>Your Dashboard</p>}
            </div>
            <div className="menu-item">
              <ImportContactsIcon />
              {open && <p>Food Diary</p>}
            </div>
            <div className="menu-item">
              <InsertChartIcon />
              {open && <p>Diet Chart</p>}
            </div>
            <div className="menu-item">
              <TrackChangesIcon />
              {open && <p>Target</p>}
            </div>
            <div className="menu-item">
              <Diversity3Icon />
              {open && <p>Friends</p>}
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />

        <div className="sync-data">
          {open && <h2>Sync Data</h2>}
          <div
            style={{
              pointerEvents:open? "inherit": "none",
              background: open ? "rgba(0,0,0, 0.1)" : "transparent",
            }}
            className="sync-container"
          >
            <div className="menu-item">
              <FavoriteIcon />
              {open && <p>Google Fit</p>}
            </div>
            <div className="menu-item">
              <AppleIcon />
              {open && <p>Apple Watch</p>}
            </div>
            <div className="menu-item">
              <FitbitIcon />
              {open && <p>Fitbit Activity</p>}
            </div>
            <div className="menu-item">
              <SettingsIcon />
              {open && <p>Settings</p>}
            </div>
          </div>
        </div>

        <div className="dark-theme">
          <div className="theme-container">
            <div className="menu-item">
              <DarkModeIcon />
              {open && <p>Lights Off</p>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
