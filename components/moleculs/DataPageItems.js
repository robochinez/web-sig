import Image from "next/image";

import BarChart from "../atoms/PageData/DataJenisKelamin";
import DoughnutChart from "../atoms/PageData/DataPerkawinan";
import LineCart from "../atoms/PageData/DataAgama";
import PieChart from "../atoms/PageData/DataUsia";
import BarChartHorizontal from "../atoms/PageData/DataPekerjaan";
import BarChartHorizontal2 from "../atoms/PageData/DataPendidikan";
export default function DataPageItems() {
  return (
    <div className="w-full h-cus bg-gray-100">
      <div className="flex flex-col  items-center">
        <h1 className="uppercase  text-3xl font-semibold">Data Desa Rogo</h1>
        <Image src="/img/Line 1.png" width={320} height={5} alt="no source" />
      </div>
      <div className=" flex flex-wrap  justify-around  h-96 lg:w-full sm:12/12 px-1 py-1">
        <div className=" w-6/12  flex justify-center">
          <LineCart />
        </div>
        <div className=" w-6/12  flex justify-center">
          <BarChart />
        </div>
        <div className=" w-6/12  flex justify-center">
          <DoughnutChart />
        </div>
        <div className=" w-6/12 flex justify-center">
          <PieChart />
        </div>
        <div className=" w-6/12 flex justify-center">
          <BarChartHorizontal />
        </div>
        <div className=" w-6/12 flex justify-center">
          <BarChartHorizontal2 />
        </div>
      </div>
    </div>
  );
}
