"use client";

import { Category } from "@prisma/client";
import {
  FcDataConfiguration,
  FcDatabase,
  FcMultipleDevices,
  FcSmartphoneTablet,
  FcCommandLine,
  FcFlowChart,
} from "react-icons/fc";
import { FaPython } from "react-icons/fa";
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";
interface CategoriesProps {
  items: Category[];
}
const iconMap: Record<Category["name"], IconType> = {
  Database: FcDatabase,
  "Back-end Development": FcDataConfiguration,
  "Front-end Development": FcMultipleDevices,
  "Mobile Development": FcSmartphoneTablet,
  "Programming Languages": FcCommandLine,
  "Software Engineering Essentials": FcFlowChart,
};
export const Categories = ({ items }: CategoriesProps) => {
  return (
    <>
      <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
        {items.map((item) => (
          <CategoryItem
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
          />
        ))}
      </div>
    </>
  );
};
