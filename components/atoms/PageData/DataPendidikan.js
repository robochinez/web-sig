import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: [
    "Usia 4-18 thn ",
    "Khusus",
    "Usia 5-6 thn",
    "Usia 7-12 thn SD",
    "Usia 12-15 thn",
    "SMP",
    "Usia 16-18 thn",
    "SMA",
  ],
  datasets: [
    {
      label: "Data Kelompok usia pendidikan",
      data: [58, 1, 79, 21, 12, 6, 13, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(68, 168, 50, 0.2)",
        "rgba(199, 115, 56, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(68, 168, 50, 1)",
        "rgba(199, 115, 56, 1)",
      ],
      borderWidth: 1,
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
export default function BarChartHorizontal2() {
  return (
    <div>
      {" "}
      <div className="w-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
