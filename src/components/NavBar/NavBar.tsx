import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-between h-10 items-center border-b border-emerald-500">
          <a href="#">
            <Logo />
          </a>
          <Menu />
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
