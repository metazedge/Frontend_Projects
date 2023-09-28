import React, { useState } from 'react'; // Import your Sass stylesheet
import './Dropdown.scss'
const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Cars', 'Motor Bikes', 'Trucks', 'Airplanes'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Dropdown <span className={`arrow ${isOpen ? 'down' : 'up'}`}>&#9660;</span>
      </button>
      <ul className="dropdown-list">
        {options.map((option, index) => (
          <li key={index}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
