import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="flex justify-between h-10 items-center border-b border-emerald-500 text-amber-300">
            <Link to="/">
              <Logo />
            </Link>
            <Menu />
          </div>
        </nav>
      </header>
      <div className="mt-2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
