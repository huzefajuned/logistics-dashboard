import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, plugins } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
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
        // usePointStyle: "circle",
        // Add other dataset properties as needed
      },
    ],

    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || "";
              const value = context.parsed || 0;
              return `${label}: ${value}%`;
            },
          },
        },
        legend: {
          dataLabels: {
            enabled: true,
          },
          // display: true,
          // usePointStyle: "cicle",
          // Hide legend if not needed
        },
      },
    },
    labels: labels,
  };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     tooltip: {
  //       callbacks: {
  //         label: (context: any) => {
  //           const label = context.label || "";
  //           const value = context.parsed || 0;
  //           return `${label}: ${value}%`;
  //         },
  //       },
  //     },
  //     legend: {
  //       display: true,
  //       usePointStyle: "cicle",
  //       // Hide legend if not needed
  //     },
  //   },
  // };

  return (
    <Doughnut
      data={chartData}
      // options={options}

      className="m-auto justify-center items-center text-center w-[220px] h-[220px]"
    />
  );
};

export default DriverChart;
