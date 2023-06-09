"use client"
import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { CommonHeaderProps } from "../interface/types";
const DriverManagement: React.FC<CommonHeaderProps> = ({
  heading,
  title,
  icon,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="w-[428px] h-[299px] text-center items-center justify-center  border-[1px] border-secondary-40  rounded-lg bg-white dark:bg-[#3C4454] dark:border-none">
      <CommonHeader heading={heading} title={title} icon={icon} />
    </div>
  );
};

export default DriverManagement;
