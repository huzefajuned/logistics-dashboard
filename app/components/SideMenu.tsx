"use client";
import React, { useEffect, useState } from "react";
import { AimOutlined, ReloadOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";
const SideMenu: React.FC<any> = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme;
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="w-[329px] flex flex-row  h-[768px] text-center">
      <div className="w-[56px] bg-[#F1F4FF]">
        <p className="cursor-pointer mt-10">
          {currentTheme === "dark" ? (
            <ReloadOutlined
              className="text-2xl text-secondary"
              onClick={() => setTheme("light")}
            />
          ) : (
            <AimOutlined
              className="text-2xl text-secondary"
              onClick={() => setTheme("dark")}
            />
          )}
        </p>
      </div>
      <div className="w-[273px] shadow-custom dark:text-white dark:bg-[#3C4454] ">Menu</div>
    </div>
  );
};

export default SideMenu;
