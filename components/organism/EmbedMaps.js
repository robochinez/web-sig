import React from "react";
export default function MyComponent() {
  return (
    <>
      <div
        id="dataDesign"
        className="container mx-auto flex flex-row-reverse py-4"
      >
        <div className="w-full h-full  flex justify-end ">
          <div className="w-full ">
            <iframe
              className="w-full h-screen rounded-xl"
              src="https://www.google.com/maps/d/u/4/embed?mid=110t0KFn7-OVmtDPvWi5JQeZfNFMQWEis"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
