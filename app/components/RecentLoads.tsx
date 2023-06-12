import React, { useEffect, useState } from "react";
import { RecentLoadsProps } from "../interface/types";
import CommonHeader from "./CommonHeader";
import { Table } from "antd";

const RecentLoads: React.FC<RecentLoadsProps> = ({
  heading,
  title,
  icon,
  columns,
  data,
}) => {
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
      rounded-lg overflow-hidden dark:bg-[#3C4454] dark:border-none"
    >
      <CommonHeader heading={heading} title={title} icon={icon} />
      <Table
        columns={columns}
        dataSource={data}
        tableLayout="auto"
        size="middle"
        bordered={false}
        scroll={{ y: 190, x: "100%" }}
        pagination={false}
      />
    </div>
  );
};

export default RecentLoads;
