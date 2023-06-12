"use client";
import React from "react";
import { CommonTableProps } from "../interface/types";
import { Table } from "antd";

const CommonTable: React.FC<CommonTableProps> = ({ columns, data }: any) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        tableLayout="auto"
        size="large"
        bordered={false}
        scroll={{ y: 180, x: "100%" }}
        pagination={false}
      />
    </>
  );
};

export default CommonTable;
