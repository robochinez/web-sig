import React from "react";
import ItemLogo from "../atoms/Nav/ItemLogo";
import NavItems from "../moleculs/NavItems";

export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-400 shadow-3xl">
        <div className="container mx-auto">
          <div className="flex  h-20 justify-between items-center content-center ">
            <div className="w-6/12  px-3">
              <ItemLogo />
            </div>
            <div className="w-6/12 ">
              <NavItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
