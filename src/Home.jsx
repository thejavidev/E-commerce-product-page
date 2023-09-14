import React, { useEffect, useRef, useState } from "react";
import { shoes1, shoes2, shoes3, shoes4 } from "./assets";

const Home = () => {
  const bigSrc = useRef();
  const smallSrc = useRef();
  const [bigImgSrc, setBigImgSrc] = useState("");

  const handleSmallImageClick = (e) => {
    const smallImageSrc = e.target.getAttribute("src");
    setBigImgSrc(smallImageSrc);
  };

  return (
    <>
      <div className="mt-[130px]"></div>
      <div className="grid grid-cols-2 gap-4 px-[150px]">
        <div className="border-2 px-[80px] py-[20px]">
          <img
            ref={bigSrc}
            className="h-[450px] w-full object-cover rounded-xl mb-[20px]"
            src={bigImgSrc ? bigImgSrc : shoes1}
            alt=""
          />
          <div className="grid grid-cols-4 gap-4 images">
            <div className="picture active  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                ref={smallSrc}
                src={shoes2}
                className="rounded-xl h-[100px] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes1}
                className="rounded-xl h-[100px] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes3}
                className="rounded-xl h-[100px] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes4}
                className="rounded-xl h-[100px] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="border-2">test</div>
      </div>
    </>
  );
};

export default Home;
