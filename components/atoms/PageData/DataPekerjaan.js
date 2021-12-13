import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: [
    "Belum Bekerja",
    "Pejabat Negara",
    "tenaga pengajar",
    "Wiraswasta",
    "Pertanian",
    "nelayan",
    "mahasiswa",
    "pekerjaan lainnya",
  ],
  datasets: [
    {
      label: "Data Pekerjaan",
      data: [514, 19, 1, 115, 387, 0, 324, 423],
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
export default function BarChartHorizontal() {
  return (
    <div className="w-96">
      <Bar data={data} options={options} />
    </div>
  );
}
