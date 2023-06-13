"use client";
import React, { useEffect, useState, useCallback } from "react";
import DriverDocuments from "@/app/components/DriverDocuments";
import DriverManagement from "@/app/components/DriverManagement";
import Maps from "@/app/components/Maps";
import RecentNotifications from "@/app/components/RecentNotifications";
import RecentLoads from "@/app/components/RecentLoads";
import SideMenu from "@/app/components/SideMenu";
import TruckDocuments from "@/app/components/TruckDocuments";
import {
  CommonSingleDataProps,
  DriverDocumentsProps,
  DriverManagementProps,
  RecentLoadsColumnsProps,
  RecentLoadsDataProps,
  RecentLoadsProps,
  RecentLoadsTableStatusColorProps,
  RecentNotificationsProps,
  SingleNotificationProps,
  TruckDocumentsProps,
  documentStatusColorProps,
} from "@/app/interface/types";
import { MoreOutlined } from "@ant-design/icons";
import DashboardHeader from "@/app/components/DashboardHeader";
import { ThemeProvider } from "next-themes";
import { notifications } from "@/app/dummy_Data/notifications";
import { truckDocuments } from "@/app/dummy_Data/truckDocuments";
import { driverDocuments } from "@/app/dummy_Data/driverDocuments";
import { recentLoads } from "@/app/dummy_Data/recentLoads";

const Dashboard = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);
  //dummy-Notifications---
  const notificationsData: SingleNotificationProps[] = notifications;

  //dummyData- truckDocuments---
  const truckDocumentsdummyData: CommonSingleDataProps[] = truckDocuments;

  //dummyData- truckDocuments---
  const driverDocumentsdummyData: CommonSingleDataProps[] = driverDocuments;

  const RecentNotificationsPropsData: RecentNotificationsProps = {
    heading: "Recent Notification",
    title: "View All",
    icon: <MoreOutlined />,
    data: notificationsData,
  };

  // statusColor for RecentLoads.tsx----
  const statusColor: RecentLoadsTableStatusColorProps = {
    Processing: "#FF9900",
    Delivered: "#00B10C",
    Cancelled: "#EC0048",
  };

  // statusBgColor for RecentLoads.tsx----
  const statusBgColor: RecentLoadsTableStatusColorProps = {
    Processing: "#FFF7EC",
    Delivered: "#F2FFF3",
    Cancelled: "#FFF2F6",
  };

  //Columns RecentLoads---
  const columns: any = [
    { title: "Order ID", dataIndex: "orderId" },
    { title: "Load No.", dataIndex: "loadNo" },
    { title: "Origin", dataIndex: "origin" },
    { title: "Destination", dataIndex: "destination" },
    {
      title: "Status",
      dataIndex: "status",
      statusColor: statusColor,
      statusBgColor: statusBgColor,
      render: (text: string) => (
        <span
          style={{
            color: statusColor[text],
            backgroundColor: statusBgColor[text],
            borderRadius: 12,
            padding: 6,
          }}
        >
          {text}
        </span>
      ),
    },
  ];
  //fake RecentLoads---
  const data: RecentLoadsDataProps[] = recentLoads;

  //dummyData- recentLoads---
  const RecentLoadsPropsData: RecentLoadsProps = {
    heading: "Recent Load",
    title: "View All",
    icon: <MoreOutlined />,
    columns: columns,
    data: data,
  };

  // dummy-chartData & chartLabels
  const chartData = [92, 8];
  const chartLabels = ["Available", "Unavailable"];

  const DriverManagementPropsData: DriverManagementProps = {
    heading: "Driver Management",
    title: "View All",
    icon: <MoreOutlined />,
    canToggle: false,
    chartData: chartData,
    chartLabels: chartLabels,
  };

  //DriverDocumentsPropsData
  const DriverDocumentsPropsData: DriverDocumentsProps = {
    heading: "Driver Documents",
    title: "View All",
    icon: <MoreOutlined />,
    canToggle: true,
    data: driverDocumentsdummyData,
  };

  //TruckDocumentsPropsData
  const TruckDocumentsPropsData: TruckDocumentsProps = {
    heading: "Truck Documents",
    title: "View All",
    icon: <MoreOutlined />,
    canToggle: true,
    data: truckDocumentsdummyData,
  };

  if (!mount) {
    return null;
  }
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-row max-w-[1440px] w-full max-h-[1090px] h-full  dark:bg-[#2F3640]">
        <SideMenu />
        <div className="flex flex-col  pt-0 p-[40px] ">
          <DashboardHeader />
          <div className="flex flex-row flex-wrap gap-[18px] mt-2">
            <Maps />
            <RecentNotifications {...RecentNotificationsPropsData} />
            <RecentLoads {...RecentLoadsPropsData} />
            <DriverManagement {...DriverManagementPropsData} />
            <TruckDocuments {...TruckDocumentsPropsData} />
            <DriverDocuments {...DriverDocumentsPropsData} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
