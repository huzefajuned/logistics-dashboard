import React from "react";
import CommonHeader from "./CommonHeader";
import { CommonHeaderProps } from "../interface/types";
const DriverManagement: React.FC<CommonHeaderProps> = ({
  heading,
  title,
  icon,
}) => {
  return (
    <div className="w-[428px] h-[299px] text-center items-center justify-center  p-[10px] border-[1px] border-secondary-40  rounded-lg">
      <CommonHeader heading={heading} title={title} icon={icon} />
    </div>
  );
};

export default DriverManagement;
