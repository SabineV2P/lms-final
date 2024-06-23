import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <>
      <div className="h-full border-r dark:border-black flex flex-col overflow-y-auto bg-white dark:bg-slate-950 shadow-sm">
        <div className="px-1 pt-1 pb-4 fixlogo">
          <Logo />
        </div>
        <div className="flex flex-col w-full">
          <SidebarRoutes />
        </div>
      </div>
    </>
  );
};
