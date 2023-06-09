"use client";
import React, { useEffect, useState } from "react";
import DriverDocuments from "@/app/components/DriverDocuments";
import DriverManagement from "@/app/components/DriverManagement";
import Maps from "@/app/components/Maps";
import RecentNotifications from "@/app/components/RecentNotifications";
import RecentLoads from "@/app/components/RecentLoads";
import SideMenu from "@/app/components/SideMenu";
import TruckDocuments from "@/app/components/TruckDocuments";
import {
  CommonHeaderProps,
  RecentNotificationsProps,
  SingleNotificationProps,
} from "@/app/interface/types";
import { MoreOutlined, MessageOutlined } from "@ant-design/icons";
import DashboardHeader from "@/app/components/DashboardHeader";
import { ThemeProvider } from "next-themes";

//dummy-Notifications---
const notificationsData: SingleNotificationProps[] = [
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "10 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "13 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "15 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "23 min ago",
  },
  {
    notification_icon: <MessageOutlined />,
    notification_title: "Lorem ipsum dolor sit amet.",
    notification_subtitle: "At vero eos et accusam et justo duo dolores ete.",
    notification_time: "30 min ago",
  },
];

const RecentNotificationsPropsData: RecentNotificationsProps = {
  heading: "Recent Notification",
  title: "View All",
  icon: <MoreOutlined />,
  data: notificationsData,
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
    <ThemeProvider attribute="class">
      <div className="flex flex-row max-w-[1440px] w-full max-h-[1090px] h-full  bg-white dark:bg-[#2F3640]">
        <SideMenu />
        <div className="flex flex-col p-[40px]">
          <DashboardHeader />
          <div className="flex flex-row flex-wrap gap-[18px]">
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
