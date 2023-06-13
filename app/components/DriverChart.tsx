"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, plugins } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
interface DoughnutChartProps {
  data: number[];
  labels: string[];
}

const DriverChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
}: DoughnutChartProps) => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const datasets: any = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#00B10C", "#EC0048"],
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          margin: 20, // Adjust the padding around each legend label

          font: {
            size: 12, // Adjust the font size of the legend labels
          },
        },
        position: "bottom",
        align: "middle",
        boxWidth: 100,
      },
    },
    elements: {
      point: {
        rotation: 90,
        borderWidth: 1,
        borderColor: "#fff",
      },
    },
    layout: {
      padding: {
        bottom: 0,
      },
    },
  };

  return (
    <div className="flex flex-row m-auto justify-center items-center w-[300px] h-[200px]">
      <Doughnut
        data={datasets}
        options={options}
        className="w-[140px] h-[140px]"
      />
    </div>
  );
};

export default DriverChart;
