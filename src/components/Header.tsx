import { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import arrow from "../assets/images/icon-arrow-down.svg";

const NAV_LINKS = [
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

const renderNavLinks = () => {
  return NAV_LINKS.map((link) => (
    <li key={link.text} className="py-2">
      <a
        href={link.href}
        className={`md:block hover:text-neutral-dark-blue active:text-neutral-dark-blue transition duration-300 ease-in-out px-6 py-3 w-auto md:min-w-[100px] rounded-full 
          ${
            link.text === "Contact"
              ? "bg-primary-yellow md:bg-neutral-white hover:bg-neutral-white/30 hover:text-neutral-white text-neutral-dark-blue font-fraunces uppercase focus:font-fraunces active:font-fraunces"
              : " text-neutral-grayish-blue md:text-neutral-white"
          }
        `}
      >
        {link.text}
      </a>
    </li>
  ));
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[url('/assets/images/mobile/image-header.jpg')] sm:bg-[url('/assets/images/desktop/image-header.jpg')] bg-cover bg-top bg-no-repeat w-full min-h-screen h-[120vh] relative text-center text-neutral-white font-bold">
      <nav className="flex justify-between items-center p-4 lg:px-20 absolute w-full top-0 z-10">
        <img src={logo} alt="logo" />
        <button type="button" className="md:hidden" onClick={toggleMenu}>
          <img src={hamburger} alt="hamburger icon" className="w-8 h-8" />
        </button>
        <ul
          className={`${
            isMenuOpen
              ? "block before:content-[''] before:absolute before:top-[-30px] before:right-0 before:border-l-[20px] before:border-l-transparent before:border-b-[20px] before:border-b-white before:border-t-[20px] before:border-t-transparent before:border-r-[20px] before:border-r-white"
              : "hidden"
          } md:flex md:ml-auto md:right-0 justify-between space-y-2 p-8 md:p-0 bg-white md:bg-transparent transition duration-300 ease-in-out absolute md:relative top-24 left-1/2 -translate-x-1/2 md:translate-0 w-10/12 md:w-auto md:top-0 md:left-auto`}
        >
          {renderNavLinks()}
        </ul>
      </nav>
      <h1 className="font-fraunces absolute top-2/7 left-1/2 transform -translate-x-1/2 text-[2.5rem] sm:text-5xl lg:text-7xl md:w-full uppercase tracking-[0.2em]">
        We are creatives
      </h1>
      {!isMenuOpen && (
        <img
          src={arrow}
          alt="Arrow"
          className="absolute left-1/2 top-5/9 transform -translate-x-1/2 z-10"
        />
      )}
    </header>
  );
};

export default Header;
