import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="p-6 md:bg-transparent z-50  md:absolute w-full">
      <div className="mx-auto flex justify-between items-center">
        <Logo handleClick={handleClick}/>
        <button
          className="md:hidden bg-pink-500 px-4 py-3"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {!isOpen ? "☰" : "X"}
        </button>
        {/* active:text-pink-500 */}
        <ul className="hidden text-white md:flex space-x-6 font-semibold">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-5 space-y-5 divide-solid divide-y-1 divide-gray-300">
          <li>
            <NavLink onClick={handleClick} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} to="/contact">Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavigationBar;
