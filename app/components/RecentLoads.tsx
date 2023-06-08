import React from "react";
import { CommonHeaderProps } from "../interface/types";
import CommonHeader from "./CommonHeader";
const RecentLoads: React.FC<CommonHeaderProps> = ({ heading, title, icon }) => {
  return (
    <div className="w-[585px] h-[299px] text-center items-center justify-center  p-[10px] border-[1px] border-secondary-40  rounded-lg">
      <CommonHeader heading={heading} title={title} icon={icon} />
    </div>
  );
};

export default RecentLoads;
