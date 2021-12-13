import { useContext, useState } from "react";
import GalleryContext from "../../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
export default function GalleryComponent() {
  const {
    galleryStore: {
      GalleryRawan,
      GalleryDusun,
      GalleryEvakuasi,
      GalleryKlinik,
      GalleryRumahIbadah,
      GallerySekolah,
    },
    dispatch,
  } = useContext(GalleryContext);
  return (
    <>
      <div className="flex   justify-center items-center flex-col container mx-auto  mb-9">
        <div className="text-3xl mb-5 font-bold">BATAS DUSUN</div>
        <div className="flex   justify-center container mx-auto  mb-1">
          {GalleryDusun.length > 0
            ? GalleryDusun.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
      <div className="flex   justify-center flex-col items-center container mx-auto mb-9">
        <div className="text-3xl mb-5 font-bold">DAERAH RAWAN</div>
        <div className="flex   justify-center container mx-auto  mb-1">
          {GalleryRawan.length > 0
            ? GalleryRawan.map((glr2, index) => (
                <GalleryImage key={index} glr={glr2} />
              ))
            : ""}
        </div>
      </div>
      <div className="flex   justify-center flex-col items-center container mx-auto mb-9">
        <div className="text-3xl mb-5 font-bold">DAERAH EVAKUASI</div>
        <div className="flex   justify-center container mx-auto  ">
          {GalleryEvakuasi.length > 0
            ? GalleryEvakuasi.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
      <div className="flex   justify-center flex-col items-center container mx-auto mb-9">
        <div className="text-3xl mb-5 font-bold">KLINIK</div>
        <div className="flex   justify-center container mx-auto  ">
          {GalleryKlinik.length > 0
            ? GalleryKlinik.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
      <div className="flex   justify-center flex-col items-center container mx-auto mb-9">
        <div className="text-3xl mb-5 font-bold">RUMAH IBADAH</div>
        <div className="flex   justify-center container mx-auto  ">
          {GalleryRumahIbadah.length > 0
            ? GalleryRumahIbadah.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
      <div className="flex   justify-center flex-col items-center container mx-auto mb-9">
        <div className="text-3xl mb-5 font-bold">SEKOLAH</div>
        <div className="flex   justify-center container mx-auto  ">
          {GallerySekolah.length > 0
            ? GallerySekolah.map((glr, index) => (
                <GalleryImage key={index} glr={glr} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
