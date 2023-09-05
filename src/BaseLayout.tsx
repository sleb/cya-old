import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="antialiased h-screen flex">
      <div className="bg-emerald-600   w-full text-amber-300">
        <div className="mx-2 md:mx-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
