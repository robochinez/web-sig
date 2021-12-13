import BgLanding from "../atoms/Landing/BgLanding";
import ImageLanding from "../atoms/Landing/ImageLanding";
import Line from "../atoms/Landing/Line";
import Typo from "../atoms/Landing/Typo";
import Typograph from "../atoms/Landing/Typograph";

export default function LandingItems() {
  return (
    <>
      <BgLanding />
      <div className="container mx-auto">
        <div className="flex   justify-between items-center">
          <div className="w-6/12 h-96 flex flex-col justify-center">
            <Typograph />
            <Line />
            <Typo />
          </div>
          <div className="w-6/12">
            <ImageLanding />
          </div>
        </div>
      </div>
    </>
  );
}
