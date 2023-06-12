"use client";
import { Chart, ArcElement, Tooltip, Legend, plugins } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

import React, { useEffect, useState } from "react";
import "chart.js";
import { Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {
  data: number[];
  labels: string[];
}
const DriverChart: React.FC<DoughnutChartProps> = ({ data, labels }) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  const chartData = {
    type: "doughnut",
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(236, 0, 72, 1)", "rgba(0, 177, 12, 1)"],
      },
    ],
    labels: labels,
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (Item: any) => Item.formattedValue + Item.label + "%",
        },
      },
      labels: {
        render: (val: any) => {
          return val;
        },
      },
    },
  };

  return (
    <Doughnut
      data={chartData}
      options={options}
      className="m-auto  justify-center items-center text-center  w-[220px] h-[220px] "
    />
  );
};

export default DriverChart;