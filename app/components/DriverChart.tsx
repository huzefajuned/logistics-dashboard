"use client";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// interface DoughnutChartProps {
//   data: number[];
//   labels: string[];
// }

const DriverChart: React.FC<any> = ({ data, labels }: any) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const series = data;

  const chartOptions: any = {
    options: {
      chart: {
        type: "donut",
      },
    },
    colors: ["#00B10C", "#EC0048"],

    labels: labels,

    dataLabels: {
      enabled: true,
      position: "bottom",
    },
    legend: {
      position: "bottom",
    },
  };

  return (
    <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[200px]  ">
      <ReactApexChart
        // width={240}
        options={chartOptions}
        series={series}
        type="donut"
      />
    </div>
  );
};

export default DriverChart;
