import React from "react";

export interface CommonHeaderProps {
  heading: string;
  title: string;
  icon: React.ReactNode;
}

export interface RecentNotificationsProps {
  heading: string;
  title: string;
  icon: React.ReactNode;
  data: SingleNotificationProps[];
}

export interface SingleNotificationProps {
  notification_icon: React.ReactNode;
  notification_title: string;
  notification_subtitle: string;
  notification_time: string;
}

// export interface NotificationData {
//   data: SingleNotificationProps;
// }
