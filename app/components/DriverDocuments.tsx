"use client";
import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { DriverDocumentsProps } from "../interface/types";
import CommonCustomTable from "./CommonCustomTable";

const DriverDocuments: React.FC<DriverDocumentsProps> = ({
  heading,
  title,
  icon,
  data,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div
      className="w-[418px] h-[312px]
       text-center items-center justify-center border-[1px]
        border-secondary-40  rounded-lg bg-white dark:bg-[#3C4454] dark:border-none overflow-scroll"
    >
      <CommonHeader heading={heading} title={title} icon={icon} />
      <CommonCustomTable data={data} />
    </div>
  );
};

export default DriverDocuments;
