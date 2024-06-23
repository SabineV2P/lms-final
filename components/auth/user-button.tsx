"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export const UserButton = () => {
  const user = useCurrentUser();

  const pathName = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <Link href={pathName === "/settings" ? "/" : "/settings"}>
          <DropdownMenuItem>
            {pathName === "/settings" ? (
              <>
                <HomeIcon className="h-4 w-4 mr-2" />
                <span>Home</span>
              </>
            ) : (
              <>
                <GearIcon className="h-4 w-4 mr-2" />
                <span>Settings</span>
              </>
            )}
          </DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
