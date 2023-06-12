import React, { useEffect, useState } from "react";
import {
  CommonHeaderProps,
  RecentLoadsColumnsProps,
  RecentLoadsDataProps,
  RecentLoadsTableStatusColorMapProps,
} from "../interface/types";
import CommonHeader from "./CommonHeader";
import { Table } from "antd";

const statusColorMap: RecentLoadsTableStatusColorMapProps = {
  Processing: "#FF9900",
  Delivered: "#00B10C",
  Cancelled: "#EC0048",
};

const statusBgColorMap: RecentLoadsTableStatusColorMapProps = {
  Processing: "#FFF7EC",
  Delivered: "#F2FFF3",
  Cancelled: "#FFF2F6",
};
const columns: RecentLoadsColumnsProps[] = [
  { title: "Order ID", dataIndex: "orderId" },
  { title: "Load No.", dataIndex: "loadNo" },
  { title: "Origin", dataIndex: "origin" },
  { title: "Destination", dataIndex: "destination" },
  {
    title: "Status",
    dataIndex: "status",
    render: (text: string) => (
      <span
        style={{
          color: statusColorMap[text],
          backgroundColor: statusBgColorMap[text],
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

const RecentLoads: React.FC<CommonHeaderProps> = ({ heading, title, icon }) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div
      className="w-[585px] h-[299px] text-center 
              items-center justify-center border-[1px] border-secondary-40 
     rounded-lg overflow-hidden dark:bg-[#3C4454] dark:border-none "
    >
      <CommonHeader heading={heading} title={title} icon={icon} />
      <Table
        columns={columns}
        dataSource={data}
        tableLayout="auto"
        size="middle"
        bordered={false}
        scroll={{ y: 200, x: "100%", }}
        pagination={false}

        />
    </div>
  );
};

export default RecentLoads;
