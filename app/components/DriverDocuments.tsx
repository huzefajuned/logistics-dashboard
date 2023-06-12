"use client";
import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { DriverDocumentsProps } from "../interface/types";
import CommonSingleDocument from "./CommonTable";

const DriverDocuments: React.FC<DriverDocumentsProps> = ({
  heading,
  title,
  icon,
  data,
  columns
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
        border-secondary-40  rounded-lg bg-white dark:bg-[#3C4454] dark:border-none"
    >
      <CommonHeader heading={heading} title={title} icon={icon} />
      <CommonSingleDocument data={data}  columns={columns} />
    </div>
  );
};

export default DriverDocuments;
