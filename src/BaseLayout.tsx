import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="antialiased h-screen bg-emerald-600 text-slate-800 w-full flex">
      <div className="mx-2 md:mx-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
