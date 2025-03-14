import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";

const NAV_LINKS = [
  { href: "#", text: "About" },
  { href: "#", text: "Services" },
  { href: "#", text: "Projects" },
];

const SOCIAL_ICONS = [
  { href: "#", src: facebookIcon, alt: "Facebook" },
  { href: "#", src: instagramIcon, alt: "Instagram" },
  { href: "#", src: twitterIcon, alt: "Twitter" },
  { href: "#", src: pinterestIcon, alt: "Pinterest" },
];

const renderNavLinks = () => {
  return NAV_LINKS.map((link) => (
    <li key={link.text}>
      <a href={link.href} className="hover:text-neutral-white transition duration-300 ease-in-out">
        {link.text}
      </a>
    </li>
  ));
};

const renderSocialIcons = () => {
  return SOCIAL_ICONS.map((icon) => (
    <a key={icon.alt} href={icon.href}>
      <img
        src={icon.src}
        alt={icon.alt}
        className="hover:opacity-75 hover:filter hover:invert hover:brightness-0 transition duration-300 ease-in-out"
      />
    </a>
  ));
};

const Footer = () => {
  return (
    <footer className="bg-[#8ed0c4] text-primary-footer py-16 px-8">
      <div className="container mx-auto text-center max-w-sm">
        <img src={logo} alt="Sunnyside logo" className="mx-auto mb-10 w-42 logo-filter" />
        <nav className="mb-20">
          <ul className="flex justify-between">
            {renderNavLinks()}
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-x-6">
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;