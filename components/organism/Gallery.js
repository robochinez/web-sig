import React from "react";
import GalleryProvider from "../../context/providers/GalleryProvider";
import GalleryComponent from "../atoms/gallery/GalleryComponent";
export default function Gallery() {
  return (
    <>
      <div
        id="dataGallery"
        className="flex justify-center flex-col items-center"
      >
        <GalleryProvider>
          <GalleryComponent />
        </GalleryProvider>
      </div>
    </>
  );
}
