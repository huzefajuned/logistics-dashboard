"use client";
import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { RecentNotificationsProps } from "../interface/types";
import SingleNotification from "./SingleNotification";

const RecentNotifications: React.FC<RecentNotificationsProps> = ({
  heading,
  title,
  icon,
  data
  // notification_icon,
  // notification_subtitle,
  // notification_title,
  // notification_time,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="w-[428px] h-[299px]  text-center items-center justify-center border-[1px] border-secondary-40  rounded-lg overflow-scroll">
      <CommonHeader heading={heading} title={title} icon={icon}  />
      <SingleNotification data={data} />
    </div>
  );
};

export default RecentNotifications;
