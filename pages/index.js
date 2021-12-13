import Head from "next/head";
import Image from "next/image";

import DataPage from "../components/organism/DataPage";
import EmbedMaps from "../components/organism/EmbedMaps";
import Gallery from "../components/organism/Gallery";
import LandingPage from "../components/organism/LandingPage";
import Navbar from "../components/organism/Navbar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className="h-screen">
          <Navbar />
          <LandingPage />
        </div>
        <DataPage />
        <Gallery />
        <EmbedMaps />
      </div>
    </>
  );
}
