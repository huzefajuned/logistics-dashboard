"use client";
import React, { useEffect, useState } from "react";
import { FilePdfOutlined } from "@ant-design/icons";
interface CommonCustomTableProps {
  documentName: string;
  expiryDate: string;
}
const CommonCustomTable: React.FC<{ data: CommonCustomTableProps[] }> = ({
  data,
}) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  // current date---
  const currentDate = new Date().toISOString().split("T")[0];

  if (!mount) {
    return null;
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between p-2 bg-[#FAFAFC] dark:bg-[#525967]  font-semibold text-sm">
        <p>Documents</p>
        <p>Expire On</p>
      </div>
      <div className=" h-[200px] overflow-scroll no-scrollbar">
        {data.map((entry, index: number) => {
          return (
            <div key={index} className=" flex flex-row justify-between items-center text-center  p-3">
              <div className=" flex flex-row items-center justify-center text-center">
                <FilePdfOutlined size={30}  className="text-blue-500  text-2xl" />
                <p className="ml-2 text-xs font-normal">{entry.documentName}</p>
              </div>
              <div>
                <p
                  className={`text-xs font-normal ${
                    currentDate > entry.expiryDate
                      ? "text-[#EC0048]"
                      : "text-[#FF9900]"
                  }`}
                >
                  {entry.expiryDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonCustomTable;
