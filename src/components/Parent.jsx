import React ,{ useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.css'; // Adjust the path as necessary

const NavigationButtons = () => {
 
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
    <div className="phead">
      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
     
      <button type="button" className="btn btn-outline-light" onClick={() => handleButtonClick('all')}>
        <Link className={`custom-underline ${activeButton === 'all' ? 'active' : ''}`} to="/">ALL</Link>
      </button>
      
      <button type="button" className="btn btn-outline-light" onClick={() => handleButtonClick('full')}>
        <Link className={`custom-underline ${activeButton === 'full' ? 'active' : ''}`} to="/Full">FULL STACK DEVELOPMENT</Link>
      </button>

      <button type="button" className="btn btn-outline-light" onClick={() => handleButtonClick('data')}>
        <Link className={`custom-underline ${activeButton === 'data' ? 'active' : ''}`} to="/Datas">DATA SCIENCE</Link>
      </button>

      <button type="button" className="btn btn-outline-light" onClick={() => handleButtonClick('cyber')}>
        <Link className={`custom-underline ${activeButton === 'cyber' ? 'active' : ''}`} to="/Cyber">CYBER SECURITY</Link>
      </button>

      <button type="button" className="btn btn-outline-light" onClick={() => handleButtonClick('career')}>
        <Link className={`custom-underline ${activeButton === 'career' ? 'active' : ''}`} to="/Career">CAREER</Link>
      </button>
        
        
      </div>
     
    </div>
   
    <div><Outlet/></div>
    </>
  );
}

export default NavigationButtons;
