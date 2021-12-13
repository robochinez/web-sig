import React from "react";
import { Line } from "react-chartjs-2";
const data = {
  labels: ["Belum kawin", "Kawin", "Cerai Hidup", "Cerai Mati"],
  datasets: [
    {
      label: "DATA STATUS PERKAWINAN",
      data: [873, 818, 12, 86],
      fill: false,
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 0.5)",
      borderWidth: 4,
      hoverBackgroundColor: "rgba(230, 104, 90,0.8)",
    },
  ],
};
const options = {
  scales: {
    y: { beginAtZero: true },
  },
};
export default function DoughnutChart() {
  return (
    <div className="w-96 h-56">
      <Line data={data} options={options} />
    </div>
  );
}
