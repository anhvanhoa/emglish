import React from "react";
import clsx from "clsx";
import { useSidebarContext } from "@/provider/layout-context";
import { Link } from "react-router";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <Link
      to={href}
      className="text-default-900 active:bg-none max-w-full mx-2"
    >
      <div
        className={clsx(
          isActive
            ? "[&_svg_path]:stroke-primary-500 text-primary-500 font-semibold"
            : "hover:bg-default-100",
          "text-sm flex gap-2 w-full h-full items-center px-2 py-2.5 rounded-lg cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        {icon}
        <span>{title}</span>
      </div>
    </Link>
  );
};
