import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-hamburger.svg"
import arrow from "../assets/images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <header className="relative text-center text-neutral-white font-bold h-fit">
      {/* <img
        src="/images/desktop/image-header.jpg"
        alt="Hero"
        className="w-full h-screen object-cover"
      /> */}
      <nav className="flex justify-between items-center p-6 lg:px-20 absolute w-full top-0 z-10">
        <img src={logo} alt="logo"></img>
        <img src={hamburger} alt="hamburger icon"></img>
      </nav>
      <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-4xl uppercase tracking-wide">
        We are creatives
      </h1>
      <img
        src={arrow}
        alt="Arrow"
        className="absolute left-1/2 top-3/4 transform -translate-x-1/2 z-10"
      />
    </header>
  );
};

export default Hero;
