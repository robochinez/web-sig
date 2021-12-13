import { useReducer } from "react";
import GalleryContext from "../GalleryContext";
import GalleryReducer from "../reducers/GalleryReducer";

import GalleryDusun from "../../data/batas_dusun";
import GalleryRawan from "../../data/daerah_rawan";
import GalleryEvakuasi from "../../data/jalur_evakuasi";
import GalleryKlinik from "../../data/klinik";
import GalleryRumahIbadah from "../../data/rumah_ibadah";
import GallerySekolah from "../../data/sekolah";
const GalleryProvider = (props) => {
  const [galleryStore, dispatch] = useReducer(GalleryReducer, {
    GalleryDusun,
    GalleryRawan,
    GalleryEvakuasi,
    GalleryKlinik,
    GalleryRumahIbadah,
    GallerySekolah
  });
  return (
    <>
      <div>
        <GalleryContext.Provider value={{ galleryStore, dispatch }}>
          {props.children}
        </GalleryContext.Provider>
      </div>
    </>
  );
};
export default GalleryProvider;
