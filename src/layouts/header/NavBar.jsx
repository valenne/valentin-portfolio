import { Logo } from "../../components/Logo.jsx";
import { NavLink } from "./NavLink.jsx";

export const NavBar = () => {
  return (
    <header className="header flex flex-center">
      <nav className="navBar flex space-between">
        <Logo />
        <NavLink />
      </nav>
    </header>
  );
};
