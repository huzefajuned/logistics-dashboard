"use client";
import React, { useEffect, useState } from "react";
import { MoreOutlined } from "@ant-design/icons";

const DashboardHeader: React.FC<any> = () => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="flex sticky top-0 max-w-[1111px] h-[88px] pl-0  p-[10px] justify-start items-end z-10 bg-white dark:bg-[#2F3640] dark:text-white dark:border-none">
      <h3 className="text-3xl">Dashboard</h3>{" "}
      <MoreOutlined className="text-3xl cursor-pointer" />
    </div>
  );
};

export default DashboardHeader;
