"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Typography } from "antd";
const { Text } = Typography;
import { CommonHeaderProps } from "../interface/types";

const CommonHeader: React.FC<CommonHeaderProps> = ({
  heading,
  title,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="flex flex-row  p-3 justify-between items-center text-center sticky top-0 rounded-md bg-white dark:bg-[#3C4454]">
      <h2 className="text-lg font-bold">{heading}</h2>
      <div className="flex flex-row justify-center items-center text-center">
        <Text className="text-primary-80 font-semibold text-sm cursor-pointer">
          {title}
        </Text>

        <span
          className="text-xxl h-10 w-5 cursor-pointer"
          style={{ fontSize: 22 }}
          onClick={toggleOpen}
        >
          {icon}
        </span>
      </div>

      {isOpen && (
        <>
          <div
            className="absolute rounded-[2px] flex flex-col  justify-center m-auto border-[1px] border-secondary-40
            dark:border-none shadow-custom w-[134px] h-[104px]
             bg-white text-black right-4  top-12 z-auto dark:bg-[#2F3640] dark:text-white"
          >
            <div className="flex flex-col justify-around   text-left  cursor-pointer">
              <p className="px-2 py-1  hover:text-primary-80  hover:bg-primary-60 transition font-normal text-[12px] ">
                All Documents
              </p>
              <p className="px-2 py-1  hover:text-primary-80  hover:bg-primary-60  transition font-normal text-[12px] ">
                Expired Documents
              </p>
              <p className="px-2 py-1  hover:text-primary-80  hover:bg-primary-60 transition font-normal text-[12px] ">
                Expiring Documents
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommonHeader;
