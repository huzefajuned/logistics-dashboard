"use client";
import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import DriverChart from "./DriverChart";
import { DriverManagementProps } from "../interface/types";
const DriverManagement: React.FC<DriverManagementProps> = ({
  heading,
  title,
  icon,
  canToggle,
  chartData,
  chartLabels,
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
      <CommonHeader
        heading={heading}
        title={title}
        icon={icon}
        canToggle={canToggle}
      />
      <DriverChart data={chartData} labels={chartLabels} />
    </div>
  );
};

export default DriverManagement;
