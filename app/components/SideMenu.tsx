"use client"
import React, { useEffect, useState } from "react";

const SideMenu = () => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  } 
  return (
    <div className="w-[329px] sticky top-0 left-0 bg-gray-100 h-[768px] text-center items-center justify-center ">
      SideMenu
    </div>
  );
};

export default SideMenu;
