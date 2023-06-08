"use client";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";

const DashboardHeader = () => {
  return (
    <div className=" bg-white flex sticky top-0 max-w-[1111px] h-[88px]  p-[10px] justify-start items-end z-10">
      <h3 className="text-3xl">Dashboard</h3>{" "}
      <MoreOutlined className="text-3xl cursor-pointer" />
    </div>
  );
};

export default DashboardHeader;
