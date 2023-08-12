import React from 'react';



const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'orange',
    color: 'Blue',
    padding: '10px',
  };

  return (
    <nav id="navbar" style={navbarStyle} className="flex justify-between px-20 py-10 items-center bg-white">
    <button><h1 href="/" className="text-xl font-bold transition-colors duration-300 hover:text-blue-800">Project-Management-Tool</h1>
    </button><div className="flex items-center">
      
      <ul className="flex items-center space-x-6">
      
      <li>
  <button
    className="font-semibold text-white-700 transition-colors duration-300 hover:text-blue-800 focus:outline-none"
  >
    Contact Us
  </button>
</li>
<li>
          <button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-colors duration-300 hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg></button>
</li>
       
      </ul>
    </div>
  </nav>
);
};

export default Navbar;




