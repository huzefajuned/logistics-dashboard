"use client";
import React, { useEffect, useState } from "react";
import { CommonHeaderProps } from "../interface/types";
import CommonHeader from "./CommonHeader";

const TruckDocuments: React.FC<CommonHeaderProps> = ({
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
    <div className="w-[418px] h-[312px] text-center items-center justify-center  border-[1px] border-secondary-40  rounded-lg">
      <CommonHeader heading={heading} title={title} icon={icon} />
    </div>
  );
};

export default TruckDocuments;
