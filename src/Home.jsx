import React, { useRef, useState } from "react";
import { shoes1, shoes2, shoes3, shoes4 } from "./assets";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { basket } from "./data/fakeData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./features/createPorduct";
const Home = () => {
  const bigSrc = useRef();
  const smallSrc = useRef();
  const [bigImgSrc, setBigImgSrc] = useState("");
  const [count, setCount] = useState(0);
  const dispacth = useDispatch();

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
  const handleAddToCard = (item) => {
    dispacth(addToCart(item));
  };

  const states = useSelector((state) => state.cart);
  console.log(states);

  return (
    <>
      <div className="mt-[8.125rem] "></div>
      <div className="">
        {basket &&
          basket?.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-4 px-[9.375rem] xl:px-[3.125rem] lg:px-[1.25rem] md:grid-cols-1"
            >
              <div
                key={i}
                className=" px-[5rem] md:px-[0rem] py-[1.25rem] lg:px-[1.25rem]"
              >
                <img
                  ref={bigSrc}
                  className="h-[28.125rem] md:h-[25rem] w-full object-cover rounded-xl mb-[1.25rem]"
                  src={bigImgSrc ? bigImgSrc : item.src}
                  alt=""
                />
                <div className="grid grid-cols-4 gap-4 images">
                  {item?.pictures?.map((cur, i) => (
                    <div className="picture rounded-xl relative" key={i}>
                      <img
                        onClick={handleSmallImageClick}
                        ref={smallSrc}
                        src={cur?.src}
                        className="rounded-xl h-[6.25rem] md:h-[5rem] w-full object-cover cursor-pointer relative  "
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" ">
                <div className="flex flex-col justify-center md:justify-start h-full mb-[6.25rem] gap-[1.5rem]">
                  <h5 className="text-[#d7691c] uppercase font-semibold text-[1rem] ">
                    {item?.company}
                  </h5>
                  <h2 className="text-[#000] text-[1.875rem] md:text-[1.3rem] uppercase font-bold w-[60%] ">
                    {item?.name}
                  </h2>
                  <p className="text-[0.813rem] w-[70%] ">{item?.title}</p>

                  <p className="flex items-center gap-[0.625rem]">
                    <a className="text-[#000] text-[1.563rem] font-bold">
                      ${item?.price}
                    </a>
                    <span className="bg-[#fff2e7] text-[#d7691c] font-bold p-[0.188rem] rounded-[0.313rem]">
                      {item?.discount}%
                    </span>
                  </p>
                  <p className="text-[#c0c0c8] font-semibold line-through">
                    ${item?.oldprice}
                  </p>
                  <div className="flex items-center  gap-[1.25rem]">
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
                    <button
                      onClick={() => handleAddToCard(item)}
                      className="bg-[#ff7d1b] flex items-center gap-[0.625rem] text-white text-[1.25rem] px-[2.5rem] py-[0.313rem] rounded-md transition-all hover:bg-[#ffac6a]"
                    >
                      <SlBasket />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
