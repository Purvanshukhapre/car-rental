import { useState } from 'react';
import './navbar.css';

const Navbar = ({ onHomeClick, onServiceClick, onFleetClick, onBookingClick, onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (callback) => {
    callback();
    setIsOpen(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <button className="logo" onClick={() => handleNavClick(onHomeClick)}>
            🚗 Car-Rental
          </button>
        </li>

        <li className="hidesidebar"><button className='btn-cont' onClick={() => handleNavClick(onServiceClick)}>Services</button></li>
        <li className="hidesidebar"><button className='btn-cont' onClick={() => handleNavClick(onFleetClick)}>Fleet</button></li>
        <li className="hidesidebar"><button className='btn-cont' onClick={() => handleNavClick(onBookingClick)}>Booking</button></li>
        <li className="hidesidebar"><button className='btn-cont' onClick={() => handleNavClick(onContactClick)}>Contact</button></li>

        <button className="menubtn" onClick={() => setIsOpen(true)}>☰</button>
      </ul>

      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
        <li><button className='btn-cont' onClick={() => setIsOpen(false)}>✕</button></li>
        <li><button className='btn-cont' onClick={() => handleNavClick(onServiceClick)}>Services</button></li>
        <li><button className='btn-cont' onClick={() => handleNavClick(onFleetClick)}>Fleet</button></li>
        <li><button className='btn-cont' onClick={() => handleNavClick(onBookingClick)}>Booking</button></li>
        <li><button className='btn-cont' onClick={() => handleNavClick(onContactClick)}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;