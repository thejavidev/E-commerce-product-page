import React, { useEffect, useRef, useState } from "react";
import { shoes1, shoes2, shoes3, shoes4 } from "./assets";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


import { useDispatch } from "react-redux";
import { addToCart } from "./features/createPorduct";

const Home = () => {
  const bigSrc = useRef();
  const [bigImgSrc, setBigImgSrc] = useState("");
  const [bigImgSrc2, setBigImgSrc2] = useState("");
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentPicIndex2, setCurrentPicIndex2] = useState(0);
  const prodcutBtn = useRef();
  const overlay = useRef();
  const countSpan = useRef();
  const picturesModal = useRef();
  const [count, setCount] = useState(0);

  const basket = [
    {
      id: 1,
      company: "sneaker company",
      name: "Shoes 1",
      price: 120,
      oldprice: 200,
      discount: 50,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odit eos nihil veniam maxime corporis, quisquam quis doloribus modi optio!",
      src: shoes1,
      pictures: [
        {
          id: 1,
          src: shoes2,
        },
        {
          id: 2,
          src: shoes1,
        },
        {
          id: 3,
          src: shoes3,
        },
        {
          id: 4,
          src: shoes4,
        },
      ],
      count: count,
      newCount: count,
    },
  ];
  const picArr = basket?.[0]?.pictures;
  const item = {
    pictures: picArr,
  };

  const dispatch = useDispatch();

  const handleSmallImageClick = (i) => {
    const smallImageSrc = i.src;
    setBigImgSrc(smallImageSrc);
    setCurrentPicIndex(i.id - 1);
    console.log(i.id);
  };

  const handleSmallImageClickModal = (i) => {
    setCurrentPicIndex2(i.id - 1);
    console.log(i.id);
  };
  // const handleSmallImageClick2 = (e) => {
  //   const smallImageSrc = e.target.getAttribute("src");
  //   setBigImgSrc2(smallImageSrc);
  // };

  const openNewPicPlus = () => {
    if (currentPicIndex < item?.pictures?.length - 1) {
      setCurrentPicIndex(currentPicIndex + 1);
    }
  };

  const openNewPicMinus = () => {
    if (currentPicIndex > 0) {
      setCurrentPicIndex(currentPicIndex - 1);
    }
  };

  const openNewPicPlus2 = () => {
    if (currentPicIndex2 < item?.pictures?.length - 1) {
      setCurrentPicIndex2(currentPicIndex2 + 1);
    }
  };

  const openNewPicMinus2 = () => {
    if (currentPicIndex2 > 0) {
      setCurrentPicIndex2(currentPicIndex2 - 1);
    }
  };

  const hanleIncremet = () => {
    setCount(count + 1);
  };
  const handleDencremet = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {}, [count]);

  const handleAddToCard = (item) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + count }));
    countSpan.current.innerHTML = 0;
  };
  const opeenModal = () => {
    if (picturesModal.current.classList.contains("hidden")) {
      picturesModal.current.classList.remove("hidden");
      picturesModal.current.classList.add("block");
    }
    if (overlay.current.classList.contains("invisible")) {
      overlay.current.classList.remove("invisible");
      overlay.current.classList.add("visible");
    }
  };
  const closeModal = () => {
    if (picturesModal.current.classList.contains("block")) {
      picturesModal.current.classList.remove("block");
      picturesModal.current.classList.add("hidden");
    }
    if (overlay.current.classList.contains("visible")) {
      overlay.current.classList.remove("visible");
      overlay.current.classList.add("invisible");
    }
  };

  return (
    <>
      <div
        ref={overlay}
        className="fixed top-0 left-0 right-0 w-full h-full bgColor  invisible transition-all z-[800]"
      ></div>
      <div className="mt-[8.125rem] md:mt-[3rem]"></div>
      <div>
        {basket &&
          basket?.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-4 px-[9.375rem] xl:px-[3.125rem] lg:px-[1.25rem] md:grid-cols-1 md:p-[0]"
            >
              <div className=" px-[5rem] xl:px-[1rem] md:px-[0rem] py-[1.25rem] lg:px-[1.25rem]">
                <img
                  ref={bigSrc}
                  onClick={opeenModal}
                  className="h-[28.125rem] md:h-[25rem] w-full object-cover rounded-xl md:rounded-[0] mb-[1.25rem] md:hidden cursor-zoom-in"
                  src={bigImgSrc ? bigImgSrc : item.src}
                  alt=""
                />
                <div className="h-[400px] overflow-hidden relative hidden md:block">
                  {item?.pictures?.map((cur, i) => (
                    <div
                      className={`picture rounded-xl relative ${
                        i === currentPicIndex ? "visible" : "hidden"
                      }`}
                      key={i}
                    >
                      <BiSolidChevronRight
                        onClick={openNewPicPlus}
                        className="absolute top-[42%] right-[1rem] text-[2.5rem] bg-[#ffff] rounded-full text-[#000] cursor-pointer"
                      />
                      <img
                        src={cur?.src}
                        className="h-[28.125rem] md:h-[25rem] w-full object-cover rounded-xl md:rounded-[0] mb-[1.25rem]"
                        alt=""
                      />
                      <BiSolidChevronLeft
                        onClick={openNewPicMinus}
                        className="absolute top-[42%] left-[.4rem]  text-[2.5rem] bg-[#ffff] rounded-full text-[#000]  cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4 images md:hidden">
                  {item?.pictures?.map((cur, i) => (
                    <div
                      className={`picture rounded-xl relative ${
                        i === currentPicIndex ? "active" : ""
                      }`}
                      key={i}
                      onClick={() => handleSmallImageClick(cur)}
                    >
                      <img
                        src={cur?.src}
                        className={`mypic rounded-xl h-[6.25rem] md:h-[5rem] w-full object-cover cursor-pointer relative  `}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:px-[1.4rem]">
                <div className="flex flex-col justify-center md:justify-start h-full mb-[6.25rem] gap-[1.5rem]">
                  <h5 className="text-[#d7691c] uppercase font-semibold text-[1rem] ">
                    {item?.company}
                  </h5>
                  <h2 className="text-[#000] text-[1.875rem] md:text-[1.3rem] uppercase font-bold w-[60%] ">
                    {item?.name}
                  </h2>
                  <p className="text-[0.813rem] w-[70%] ">{item?.title}</p>

                  <div className="flex flex-col gap-[1rem] md:flex-row md:items-center md:justify-between">
                    <p className="flex items-center gap-[0.625rem]">
                      <a className="text-[#000] text-[1.563rem] font-bold">
                        ${item?.price}
                      </a>
                      <span className="bg-[#fff2e7] text-[#d7691c] font-bold p-[0.188rem] rounded-[0.313rem]">
                        {item?.discount}%
                      </span>
                    </p>
                    <p className="text-[#c0c0c8] font-semibold line-through md:text-[25px]">
                      ${item?.oldprice}
                    </p>
                  </div>
                  <div className="flex items-center  gap-[1.25rem] md:flex-col">
                    <div className="flex items-center gap-[1.25rem] bg-[#f7f8fd] p-[0.625rem] rounded-md md:w-full ">
                      <FaMinus
                        onClick={handleDencremet}
                        className="text-[#d7691c] font-bold cursor-pointer md:w-full"
                      />
                      <span
                        ref={countSpan}
                        className="md:w-full md:text-center font-bold"
                      >
                        {count}
                      </span>
                      <BiPlusMedical
                        onClick={hanleIncremet}
                        className="text-[#d7691c] font-semibold cursor-pointer md:w-full"
                      />
                    </div>
                    <button
                      ref={prodcutBtn}
                      disabled={count === 0}
                      onClick={() => handleAddToCard(item)}
                      className="bg-[#ff7d1b] flex items-center  gap-[0.625rem] text-white text-[1.25rem] px-[2.5rem] py-[0.313rem] rounded-md transition-all
                       hover:bg-[#ffac6a] md:w-full md:justify-center md:py-[1.4rem]"
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
      <div
        ref={picturesModal}
        className="modal fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden z-[820] text-[#fff]"
      >
        {basket &&
          basket?.map((item, i) => (
            <div key={i}>
              <AiOutlineClose
                onClick={closeModal}
                className="absolute top-[-2.6rem] right-[-.1rem] text-[2rem] cursor-pointer"
              />
              <div className="h-[470px]  relative mb-[0px]">
                {item?.pictures?.map((cur, i) => (
                  <div
                    className={`picture rounded-xl relative ${
                      i === currentPicIndex2 ? "visible" : "hidden"
                    }`}
                    key={i}
                  >
                    <BiSolidChevronRight
                      onClick={openNewPicPlus2}
                      className="absolute top-[42%] right-[-1rem] text-[2.5rem] text-[#000] bg-white rounded-full  cursor-pointer"
                    />
                    <img
                      src={bigImgSrc2 ? bigImgSrc2 : cur.src}
                      onClick={() => handleSmallImageClick(cur)}
                      className="h-[28.125rem] md:h-[25rem] w-full object-cover rounded-xl mb-[1.25rem]"
                      alt=""
                    />
                    <BiSolidChevronLeft
                      onClick={openNewPicMinus2}
                      className="absolute top-[42%] left-[-1rem] text-[2.5rem] bg-white rounded-full   text-[#000] cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4 images md:hidden">
                {item?.pictures?.map((cur, i) => (
                  <div
                    className={`rounded-xl relative modalImg ${
                      i === currentPicIndex2 ? "active" : ""
                    }`}
                    key={i}
                  >
                    <img
                      onClick={() => handleSmallImageClickModal(cur)}
                      src={cur?.src}
                      className="rounded-xl h-[6.25rem] md:h-[5rem] w-full object-cover cursor-pointer relative  "
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
