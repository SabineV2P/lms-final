import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";
export const Navbar = () => {
  return (
    <div className="p-4 border-b dark:border-black h-full flex items-center bg-white dark:bg-slate-950 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
