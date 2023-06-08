"use client";
import React, { useEffect, useState } from "react";
import DriverDocuments from "@/app/components/DriverDocuments";
import DriverManagement from "@/app/components/DriverManagement";
import Maps from "@/app/components/Maps";
import RecentNotifications from "@/app/components/RacentNotifications";
import RecentLoads from "@/app/components/RecentLoads";
import SideMenu from "@/app/components/SideMenu";
import TruckDocuments from "@/app/components/TruckDocuments";
import { CommonHeaderProps } from "@/app/interface/types";
import { MoreOutlined } from "@ant-design/icons";
import DashboardHeader from "@/app/components/DashboardHeader";

const RecentNotificationsPropsData: CommonHeaderProps = {
  heading: "Recent Notification",
  title: "View All",
  icon: <MoreOutlined />,
};

const RecentLoadsPropsData: CommonHeaderProps = {
  heading: "Recent Load",
  title: "View All",
  icon: <MoreOutlined />,
};

const DriverManagementPropsData: CommonHeaderProps = {
  heading: "Driver Management",
  title: "View All",
  icon: <MoreOutlined />,
};
const TruckDocumentsPropsData: CommonHeaderProps = {
  heading: "Truck Documents",
  title: "View All",
  icon: <MoreOutlined />,
};
const DriverDocumentsPropsData: CommonHeaderProps = {
  heading: "Driver Documents",
  title: "View All",
  icon: <MoreOutlined />,
};

const Dashboard = () => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="  flex flex-row  max-w-[1440px] w-full max-h-[1090px] h-full">
      <SideMenu />
      <div className=" pl-[40px]  flex flex-col">
        <DashboardHeader />
        <div className="flex flex-row  flex-wrap gap-[18px]">
          <Maps />
          <RecentNotifications {...RecentNotificationsPropsData} />
          <RecentLoads {...RecentLoadsPropsData} />
          <DriverManagement {...DriverManagementPropsData} />
          <TruckDocuments {...TruckDocumentsPropsData} />
          <DriverDocuments {...DriverDocumentsPropsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
