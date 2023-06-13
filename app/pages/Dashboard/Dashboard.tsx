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
import { MoreOutlined, MessageOutlined } from "@ant-design/icons";
import DashboardHeader from "@/app/components/DashboardHeader";
import { ThemeProvider } from "next-themes";

const Dashboard = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);
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
  const data: RecentLoadsDataProps[] = [
    {
      key: "1",
      orderId: "ABCD12",
      loadNo: "122123",
      origin: "KIS212",
      destination: "STQLS",
      status: "Processing",
    },
    {
      key: "2",
      orderId: "WXYZ34",
      loadNo: "567890",
      origin: "JKL987",
      destination: "MNP456",
      status: "Delivered",
    },
    {
      key: "3",
      orderId: "PQRS56",
      loadNo: "345678",
      origin: "DEF345",
      destination: "GHI789",
      status: "Cancelled",
    },
    {
      key: "4",
      orderId: "FGHI78",
      loadNo: "901234",
      origin: "LMN012",
      destination: "UVW567",
      status: "Processing",
    },
    {
      key: "5",
      orderId: "JKLM90",
      loadNo: "567890",
      origin: "OPQ567",
      destination: "RST234",
      status: "Delivered",
    },
    {
      key: "6",
      orderId: "UVWX12",
      loadNo: "345678",
      origin: "YZA901",
      destination: "BCD456",
      status: "Cancelled",
    },
    {
      key: "7",
      orderId: "CDEF34",
      loadNo: "789012",
      origin: "GHI345",
      destination: "JKL678",
      status: "Processing",
    },
    {
      key: "8",
      orderId: "MNOP56",
      loadNo: "123456",
      origin: "QRS789",
      destination: "TUV012",
      status: "Delivered",
    },
    {
      key: "9",
      orderId: "WXYZ78",
      loadNo: "901234",
      origin: "ABC567",
      destination: "DEF234",
      status: "Cancelled",
    },
    {
      key: "10",
      orderId: "GHIJ90",
      loadNo: "567890",
      origin: "KLM901",
      destination: "NOP456",
      status: "Processing",
    },
    {
      key: "11",
      orderId: "QRST12",
      loadNo: "345678",
      origin: "UVW901",
      destination: "XYZ234",
      status: "Delivered",
    },
    {
      key: "12",
      orderId: "BCDE34",
      loadNo: "789012",
      origin: "FGH345",
      destination: "IJK678",
      status: "Cancelled",
    },
    {
      key: "13",
      orderId: "LMNO56",
      loadNo: "123456",
      origin: "PQR789",
      destination: "STU012",
      status: "Processing",
    },
    {
      key: "14",
      orderId: "UVWX78",
      loadNo: "901234",
      origin: "YZA567",
      destination: "BCD234",
      status: "Delivered",
    },
    {
      key: "15",
      orderId: "YZAB90",
      loadNo: "567890",
      origin: "CDE901",
      destination: "FGH456",
      status: "Cancelled",
    },
    {
      key: "16",
      orderId: "CDEF12",
      loadNo: "345678",
      origin: "GHI901",
      destination: "JKL234",
      status: "Processing",
    },
    {
      key: "17",
      orderId: "GHIJ34",
      loadNo: "789012",
      origin: "MNOP345",
      destination: "QRST678",
      status: "Delivered",
    },
    {
      key: "18",
      orderId: "QRST56",
      loadNo: "123456",
      origin: "UVW789",
      destination: "XYZ012",
      status: "Cancelled",
    },
    {
      key: "19",
      orderId: "LMNO78",
      loadNo: "901234",
      origin: "PQR567",
      destination: "STU234",
      status: "Processing",
    },
    {
      key: "20",
      orderId: "UVWX90",
      loadNo: "567890",
      origin: "YZA901",
      destination: "BCD456",
      status: "Delivered",
    },
  ];

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
