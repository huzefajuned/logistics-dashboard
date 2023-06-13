// CommonHeader.tsx Component Interface---
export interface CommonHeaderProps {
  heading: string;
  title: string;
  icon: any;
  canToggle?: boolean;
  onToggleMenu?: () => void;
  isOpen?: boolean;
  onApplyFilter?: (selctedItem: string) => void;
}

// RecentNotifications.tsx Component Inteface---
export interface RecentNotificationsProps {
  heading: string;
  title: string;
  icon: any;
  data: SingleNotificationProps[];
}

// Single Notifications Interface---
export interface SingleNotificationProps {
  notification_title: string;
  notification_subtitle: string;
  notification_icon?: React.ReactNode;
  notification_time: string;
}

// RecentLoads.tsx Component Inteface---
export interface RecentLoadsProps {
  heading: string;
  title: string;
  icon: any;
  columns: RecentLoadsColumnsProps[];
  data: RecentLoadsDataProps[];
}
// RecentLoads.tsx  table-data Inteface---
export interface RecentLoadsDataProps {
  key: string;
  orderId: string;
  loadNo: string;
  origin: string;
  destination: string;
  status: string;
}
export interface RecentLoadsColumnsProps {
  title: string;
  dataIndex: string;
  render?: any;
}
export interface RecentLoadsTableStatusColorProps {
  [key: string]: string;
}

// Interface for data- DriverDocuments.tsx &
export interface CommonSingleDataProps {
  documentName: string;
  expiryDate: string;
}

// Interface for  single Document inside  CommonTable.tsx---
export interface CommonTableProps {
  data: CommonSingleDataProps[];
  columns: CommonDocumentsColumnsProps;
}

// Interface for Columns in CommonTable.tsx---
export interface CommonDocumentsColumnsProps {
  title: string;
  dataIndex: string;
  render?: any;
}
// DriverDocuments.tsx Component Inteface---
export interface DriverDocumentsProps {
  heading: string;
  title: string;
  icon: any;
  canToggle: boolean;
  data: CommonSingleDataProps[];
}

// TruckDocuments.tsx Component Inteface---
export interface TruckDocumentsProps {
  heading: string;
  title: string;
  icon: any;
  canToggle?: boolean;
  data: CommonSingleDataProps[];
}

export interface documentStatusColorProps {
  expired: string;
  expiring: string;
}

// Interface for DriverManagement.tsx Component Inteface---
export interface DriverManagementProps {
  heading: string;
  title: string;
  icon: any;
  canToggle: boolean;
  chartData: number[];
  chartLabels: string[];
}
