"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
const { Text } = Typography;
import { CommonHeaderProps } from "../interface/types";

const CommonHeader: React.FC<CommonHeaderProps> = ({
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
    <div className="flex flex-row p-3 justify-between items-center text-center sticky top-0 rounded-md bg-white dark:bg-[#3C4454]">
      <h2 className="text-lg font-bold">{heading}</h2>
      <div className="flex flex-row justify-center items-center text-center">
        <Text className="text-primary-80 font-semibold text-sm cursor-pointer">
          {title}
        </Text>

        <span
          className="text-xxl h-10 w-5"
          style={{ fontSize: 22 }}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};

export default CommonHeader;
