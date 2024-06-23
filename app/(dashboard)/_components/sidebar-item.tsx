"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@radix-ui/react-select";
interface SidebarItemProps {
  icon: LucideIcon | typeof Icon;
  label: string;
  href: string;
}
export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // Checking which item is active depending on the path
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);
  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 dark:text-slate-200 text-sm font-[500] pl-6 transition-all hover:text-slate-600 dark:hover:text-white hover:bg-[#4a71ff]/40",
        isActive &&
          "text-sky-700 dark:text-[#2372f4] bg-sky-200/20 dark:bg-[#4a71ff]/20 hover:bg-sky-200/20 dark:hover:bg-[#4a71ff]/40 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-sky-700 dark:text-[#2372f4]"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full dark:border-[#2372f4]  transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
