// CommonHeader.tsx Component Interface---
export interface CommonHeaderProps {
  heading: string;
  title: string;
  icon: React.ReactNode;
}

// RecentNotifications.tsx Component Inteface---
export interface RecentNotificationsProps {
  heading: string;
  title: string;
  icon: React.ReactNode;
  data: SingleNotificationProps[];
}

// Single Notifications Interface---
export interface SingleNotificationProps {
  notification_title: string;
  notification_subtitle: string;
  notification_icon?: React.ReactNode;
  notification_time: string;
}
