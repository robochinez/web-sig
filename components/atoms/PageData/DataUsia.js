import React from "react";
import { Pie } from "react-chartjs-2";
const data = {
  labels: [
    "0-4 thn",
    "5-9 thn",
    "10-14 thn",
    "15-19 thn",
    "20-24 thn",
    "25-29 thn",
    "30-34 thn",
    "35-39 thn",
    "40-44 thn",
    "45-49 thn",
    "50-54 thn",
    "55-59 thn",
    "60-64 thn",
    "65-69 thn",
    "70-74 thn",
    "75 ke atas",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        130, 183, 185, 206, 140, 143, 123, 153, 115, 117, 86, 73, 50, 33, 25,
        27,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(190, 230, 90,0.2)",
        "rgba(90, 230, 132,0.2)",
        "rgba(90, 113, 230,0.2)",
        "rgba(204, 90, 230,0.2)",
        "rgba(230, 90, 216,0.2)",
        "rgba(230, 102, 90,0.2)",
        "rgba(194, 158, 155,0.2)",
        "rgba(156, 87, 81,0.2)",
        "rgba(48, 145, 0,0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(190, 230, 90,1)",
        "rgba(90, 230, 132,1)",
        "rgba(90, 113, 230,1)",
        "rgba(204, 90, 230,1)",
        "rgba(230, 90, 216,1)",
        "rgba(230, 102, 90,1)",
        "rgba(194, 158, 155,1)",
        "rgba(156, 87, 81,1)",
        "rgba(48, 145, 0,1)",
      ],
      borderWidth: 1,
    },
  ],
};
export default function PieChart() {
  return (
    <div className="w-96 ">
      <Pie data={data} />
    </div>
  );
}
