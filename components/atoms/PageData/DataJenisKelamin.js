import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["LAKI-LAKI", "PEREMPUAN"],
  datasets: [
    {
      label: "DATA BERDASARKAN JENIS KELAMIN",
      data: [895, 894],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 6,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
export default function BarChart() {
  return (
    <div className="w-96 h-56">
      <Bar data={data} options={options} />
    </div>
  );
}
