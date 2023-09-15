import React, { useRef, useState } from "react";
import { shoes1, shoes2, shoes3, shoes4 } from "./assets";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
const Home = () => {
  const bigSrc = useRef();
  const smallSrc = useRef();
  const [bigImgSrc, setBigImgSrc] = useState("");
  const [count, setCount] = useState(0);

  const handleSmallImageClick = (e) => {
    const smallImageSrc = e.target.getAttribute("src");
    setBigImgSrc(smallImageSrc);
  };
  const hanleIncremet = () => {
    setCount(count + 1);
  };
  const handleDencremet = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="mt-[8.125rem] "></div>
      <div className="grid grid-cols-2 gap-4 px-[9.375rem] xl:px-[3.125rem] lg:px-[1.25rem]">
        <div className=" px-[5rem] py-[1.25rem] lg:px-[1.25rem]">
          <img
            ref={bigSrc}
            className="h-[28.125rem] w-full object-cover rounded-xl mb-[1.25rem]"
            src={bigImgSrc ? bigImgSrc : shoes1}
            alt=""
          />
          <div className="grid grid-cols-4 gap-4 images">
            <div className="picture rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                ref={smallSrc}
                src={shoes2}
                className="rounded-xl h-[6.25rem] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes1}
                className="rounded-xl h-[6.25rem] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes3}
                className="rounded-xl h-[6.25rem] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
            <div className="picture  rounded-xl relative">
              <img
                onClick={handleSmallImageClick}
                src={shoes4}
                className="rounded-xl h-[6.25rem] w-full object-cover cursor-pointer relative  "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center h-full ">
            <h5 className="text-[#d7691c] uppercase font-semibold text-[1rem] mb-[1.25rem]">
              sneaker company
            </h5>
            <h2 className="text-[#000] text-[1.875rem] uppercase font-bold w-[60%] pb-[1.25rem]">
              fall limited edition sneakers
            </h2>
            <p className="text-[0.813rem] w-[70%] pb-[1.25rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              saepe sed ducimus iste quae cupiditate repellat perferendis
              dolorum. Quod libero molestiae officia voluptate sapiente beatae,
              rpellendus tenetur quam, facilis ut inventore ipsam ad natus
              maxime, magni reiciendis sed. Voluptatibus, quod?
            </p>

            <p className="flex items-center gap-[0.625rem]">
              <a className="text-[#000] text-[1.563rem] font-bold">$125 </a>
              <span className="bg-[#fff2e7] text-[#d7691c] font-bold p-[0.188rem] rounded-[0.313rem]">
                50 %
              </span>
            </p>
            <p className="text-[#c0c0c8] font-semibold line-through">$250</p>
            <div className="flex items-center mt-[0.625rem] gap-[1.25rem]">
              <div className="flex items-center gap-[1.25rem] bg-[#f7f8fd] p-[0.625rem] rounded-md ">
                <FaMinus
                  onClick={handleDencremet}
                  className="text-[#d7691c] font-bold cursor-pointer"
                />
                <span>{count}</span>
                <BiPlusMedical
                  onClick={hanleIncremet}
                  className="text-[#d7691c] font-semibold cursor-pointer"
                />
              </div>
              <button className="bg-[#ff7d1b] flex items-center gap-[0.625rem] text-white text-[1.25rem] px-[2.5rem] py-[0.313rem] rounded-md transition-all hover:bg-[#ffac6a]">
                <SlBasket />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
