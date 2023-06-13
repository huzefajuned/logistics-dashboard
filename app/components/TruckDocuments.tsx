"use client";
import React, { useCallback, useEffect, useState } from "react";
import { TruckDocumentsProps } from "../interface/types";
import CommonHeader from "./CommonHeader";
import CommonCustomTable from "./CommonCustomTable";

const TruckDocuments: React.FC<TruckDocumentsProps> = ({
  heading,
  title,
  icon,
  data,
  canToggle,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  // this state is for later use on Filtering the Trucks based on dates{expiry,expiration}
  const [data_Truck, setData_Truck] = useState([...data]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  // filtring based on selected inputs---

  const applyFilter = (selectedItem: string) => {
    const currentDate = new Date().toISOString().split("T")[0]; // current Date
    if (selectedItem === "Expired Documents") {
      const expiredDocuments = data.filter(
        (doc) => doc.expiryDate < currentDate
      );
      setData_Truck(expiredDocuments);
    } else if (selectedItem === "Expiring Documents") {
      const expiringDocuments = data.filter(
        (doc) => doc.expiryDate > currentDate
      );
      setData_Truck(expiringDocuments);
    } else {
      setData_Truck(data);
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div
      className="w-[418px] h-[312px] text-center items-center
     justify-center  border-[1px] border-secondary-40
       rounded-lg bg-white dark:bg-[#50545c]  dark:border-none"
    >
      <CommonHeader
        heading={heading}
        title={title}
        icon={icon}
        isOpen={isOpen}
        onToggleMenu={toggleOpen}
        onApplyFilter={applyFilter}
        canToggle={canToggle}
      />
      <CommonCustomTable data={data_Truck} />
    </div>
  );
};

export default TruckDocuments;
