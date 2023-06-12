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
  CommonSingleDataProps,
  DriverDocumentsProps,
  DriverManagementProps,
  RecentNotificationsProps,
  SingleNotificationProps,
  TruckDocumentsProps,
  documentStatusColorProps,
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

//dummyData- truckDocuments---
const truckDocumentsdummyData: CommonSingleDataProps[] = [
  {
    documentName: "financial_report.pdf",
    expiryDate: "2023-01-01",
  },
  {
    documentName: "training_material.pdf",
    expiryDate: "2025-08-31",
  },
  {
    documentName: "product_specifications.pdf",
    expiryDate: "2023-11-30",
  },
  {
    documentName: "project_proposal.pdf",
    expiryDate: "2022-05-15",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_strategy.pdf",
    expiryDate: "2020-12-31",
  },
  {
    documentName: "employee_handbook.pdf",
    expiryDate: "2019-06-15",
  },
  {
    documentName: "product_catalog.pdf",
    expiryDate: "2018-09-30",
  },
  {
    documentName: "business_plan.pdf",
    expiryDate: "2017-12-31",
  },
  {
    documentName: "training_manual.pdf",
    expiryDate: "2016-06-15",
  },
  {
    documentName: "company_policies.pdf",
    expiryDate: "2015-09-30",
  },
  {
    documentName: "sales_presentations.pdf",
    expiryDate: "2014-12-31",
  },
  {
    documentName: "legal_agreement.pdf",
    expiryDate: "2023-12-31",
  },
  {
    documentName: "product_manual.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "customer_survey.pdf",
    expiryDate: "2025-12-31",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_strategy.pdf",
    expiryDate: "2020-12-31",
  },
  {
    documentName: "employee_handbook.pdf",
    expiryDate: "2019-06-15",
  },
  {
    documentName: "annual_report.pdf",
    expiryDate: "2023-06-30",
  },
  {
    documentName: "market_analysis.pdf",
    expiryDate: "2024-07-31",
  },
  {
    documentName: "training_material.pdf",
    expiryDate: "2025-08-31",
  },
  {
    documentName: "product_specifications.pdf",
    expiryDate: "2023-11-30",
  },
  {
    documentName: "research_findings.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "operating_manual.pdf",
    expiryDate: "2025-01-31",
  },
  {
    documentName: "customer_contract.pdf",
    expiryDate: "2023-04-30",
  },
  {
    documentName: "product_catalog.pdf",
    expiryDate: "2018-09-30",
  },
  {
    documentName: "business_plan.pdf",
    expiryDate: "2017-12-31",
  },
  {
    documentName: "training_manual.pdf",
    expiryDate: "2016-06-15",
  },
  {
    documentName: "company_policies.pdf",
    expiryDate: "2015-09-30",
  },
  {
    documentName: "sales_presentations.pdf",
    expiryDate: "2014-12-31",
  },
  {
    documentName: "legal_agreement.pdf",
    expiryDate: "2023-12-31",
  },
  {
    documentName: "product_manual.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "customer_survey.pdf",
    expiryDate: "2025-12-31",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_campaign.pdf",
    expiryDate: "2024-05-31",
  },
];

//dummyData- truckDocuments---
const driverDocumentsdummyData: CommonSingleDataProps[] = [
  {
    documentName: "financial_report.pdf",
    expiryDate: "2023-01-01",
  },
  {
    documentName: "training_material.pdf",
    expiryDate: "2025-08-31",
  },
  {
    documentName: "product_specifications.pdf",
    expiryDate: "2023-11-30",
  },
  {
    documentName: "project_proposal.pdf",
    expiryDate: "2022-05-15",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_strategy.pdf",
    expiryDate: "2020-12-31",
  },
  {
    documentName: "employee_handbook.pdf",
    expiryDate: "2019-06-15",
  },
  {
    documentName: "product_catalog.pdf",
    expiryDate: "2018-09-30",
  },
  {
    documentName: "business_plan.pdf",
    expiryDate: "2017-12-31",
  },
  {
    documentName: "training_manual.pdf",
    expiryDate: "2016-06-15",
  },
  {
    documentName: "company_policies.pdf",
    expiryDate: "2015-09-30",
  },
  {
    documentName: "sales_presentations.pdf",
    expiryDate: "2014-12-31",
  },
  {
    documentName: "legal_agreement.pdf",
    expiryDate: "2023-12-31",
  },
  {
    documentName: "product_manual.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "customer_survey.pdf",
    expiryDate: "2025-12-31",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_strategy.pdf",
    expiryDate: "2020-12-31",
  },
  {
    documentName: "employee_handbook.pdf",
    expiryDate: "2019-06-15",
  },
  {
    documentName: "annual_report.pdf",
    expiryDate: "2023-06-30",
  },
  {
    documentName: "market_analysis.pdf",
    expiryDate: "2024-07-31",
  },
  {
    documentName: "training_material.pdf",
    expiryDate: "2025-08-31",
  },
  {
    documentName: "product_specifications.pdf",
    expiryDate: "2023-11-30",
  },
  {
    documentName: "research_findings.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "operating_manual.pdf",
    expiryDate: "2025-01-31",
  },
  {
    documentName: "customer_contract.pdf",
    expiryDate: "2023-04-30",
  },
  {
    documentName: "product_catalog.pdf",
    expiryDate: "2018-09-30",
  },
  {
    documentName: "business_plan.pdf",
    expiryDate: "2017-12-31",
  },
  {
    documentName: "training_manual.pdf",
    expiryDate: "2016-06-15",
  },
  {
    documentName: "company_policies.pdf",
    expiryDate: "2015-09-30",
  },
  {
    documentName: "sales_presentations.pdf",
    expiryDate: "2014-12-31",
  },
  {
    documentName: "legal_agreement.pdf",
    expiryDate: "2023-12-31",
  },
  {
    documentName: "product_manual.pdf",
    expiryDate: "2024-12-31",
  },
  {
    documentName: "customer_survey.pdf",
    expiryDate: "2025-12-31",
  },
  {
    documentName: "contract_agreement.pdf",
    expiryDate: "2021-09-30",
  },
  {
    documentName: "marketing_campaign.pdf",
    expiryDate: "2024-05-31",
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

// dummy-chartData & chartLabels
const chartData = [8, 92];
const chartLabels = ["Red", "Green"];

const DriverManagementPropsData: DriverManagementProps = {
  heading: "Driver Management",
  title: "View All",
  icon: <MoreOutlined />,
  chartData: chartData,
  chartLabels: chartLabels,
};

const columns: any = [
  {
    title: "Documents",
    dataIndex: "documentName",
  },
  {
    title: "Expire On",
    dataIndex: "expiryDate",
    render: (text: string) => {
      const currentDate = new Date().toISOString().split("T")[0];
      const status = text < currentDate ? "expired" : "expiring";

      return (
        <span
          style={{
            color: documentStatusColor[status],
            borderRadius: 12,
            padding: 6,
          }}
        >
          {text}
        </span>
      );
    },
  },
];

//DriverDocumentsPropsData
const DriverDocumentsPropsData: DriverDocumentsProps = {
  heading: "Driver Documents",
  title: "View All",
  icon: <MoreOutlined />,
  data: driverDocumentsdummyData,
  columns: columns,
};

//TruckDocumentsPropsData
const TruckDocumentsPropsData: TruckDocumentsProps = {
  heading: "Truck Documents",
  title: "View All",
  icon: <MoreOutlined />,
  data: truckDocumentsdummyData,
  columns: columns,
};

const documentStatusColor: documentStatusColorProps = {
  expired: "#EC0048",
  expiring: "#FF9900",
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
