import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["islam", "kristen", "hindu", "budha", "konghuchu"],
  datasets: [
    {
      label: "DATA AGAMA",
      data: [1677, 112, 0, 0, 0],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.4)",
      borderWidth: 4,
      hoverBackgroundColor: "rgba(230, 104, 90,0.8)",
    },
  ],
};
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function LineCart() {
  return (
    <>
      <div className="w-96 h-56  ">
        <Line data={data} options={options} />
      </div>
    </>
  );
}
