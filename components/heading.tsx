import { IconBadge } from "./icon-badge";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export const Heading = ({ title, description, icon }: HeadingProps) => {
  return (
    <>
      <div className="mt-[1%] px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className="p-2 w-fit rounded-md">
          <IconBadge icon={icon} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};
