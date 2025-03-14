import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-hamburger.svg"

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-6 lg:px-20 absolute w-full top-0 z-10">
            <img src={logo} alt="logo"></img>
            <img src={hamburger} alt="hamburger icon"></img>
        </nav>
    )
}