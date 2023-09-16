import React, { useEffect, useRef, useState } from "react";
import { avatar, logo, shoes1 } from "../../assets";
import { SlBasket } from "react-icons/sl";
import { BsTrash } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
const Header = () => {
  const menu = [
    {
      id: 1,
      name: "collections",
    },
    {
      id: 2,
      name: "men",
    },
    {
      id: 3,
      name: "women",
    },
    {
      id: 4,
      name: "about",
    },
    {
      id: 5,
      name: "contact",
    },
  ];
  const basketCard = useRef();
  const openUl = useRef();
  const overlay = useRef();

  const openMenu = () => {
    openUl.current.classList.add("openMenu");
    overlay.current.classList.add("openOverlay");
  };
  const closeMenu = () => {
    openUl.current.classList.remove("openMenu");
    overlay.current.classList.remove("openOverlay");
  };
  const toggleBasket = () => {
    basketCard.current.classList.toggle("open");
  };
  const states = useSelector((state) => state.cart);
  const products = states?.cartItems;

  const length = states?.cartItems.length;

  useEffect(() => {}, [products]);
  const deleteItem = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    console.log("data", updatedProducts);
  };

  const productLenth = products.map((item) => item.cartQuantity);

  return (
    <>
      <div
        ref={overlay}
        className="fixed top-0 left-0 right-0 w-full h-full bgColor  opacity-0 invisible transition-all z-[800]"
      ></div>
      <header className=" px-[9.375rem] xl:px-[7rem] md:px-[2rem] md:z-[700] py-[1.25rem]  w-full fixed top-0 left-0 right-0 bg-[#fff]">
        <div className="flex items-center w-full  justify-between  border-b-2 pb-[1.875rem]">
          <div className="flex items-center">
            <div className="mr-[1.25rem] flex items-center gap-[20px]">
              <button
                className="text-[20px] cursor-pointer hidden md:block"
                onClick={openMenu}
              >
                <AiOutlineMenu />
              </button>
              <img src={logo} alt="" />
            </div>

            <ul
              ref={openUl}
              className="flex gap-[0.625rem] items-center md:hidden"
            >
              {menu &&
                menu?.map((item, i) => (
                  <li className="capitalize font-[300] md:font-bold" key={i}>
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex items-center gap-[1.875rem]">
            <div className="card flex items-center relative">
              <button className="relative" onClick={toggleBasket}>
                <SlBasket className="text-[1.375rem]" />
                <span className="w-[0.938rem] h-[0.938rem] text-[0.625rem] p-[0.625rem] rounded-full bg-red-800 flex items-center justify-center text-white  absolute top-[-0.625rem] right-[-0.625rem]">
                  {length}
                </span>
              </button>
              <div
                ref={basketCard}
                className="basket-card absolute top-[2.5rem] right-[-5.625rem] bg-[#ffff] invisible opacity-0 shadow-mm w-[18.75rem]  p-[1.25rem] overflow-hidden"
              >
                <h2 className="border-b-[0.063rem] border-[#000] w-full capitalize pb-[0.25rem] ">
                  cart
                </h2>
                <div className="cards pt-[0.625rem] h-[10.5rem] overflow-y-scroll mb-[0.625rem]">
                  {products &&
                    products?.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between w-full items-center gap-[0.625rem] mb-[0.625rem] border-b-[0.063rem] border-[#ccc] pb-[0.313rem]"
                      >
                        <img
                          className="w-[2.5rem] rounded-sm"
                          src={item?.src}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <p className="line-clamp-1 text-[0.75rem]">
                            {item?.name}
                          </p>
                          <p className="text-[0.75]">
                            <span>$ {item?.price}</span> x
                            <span className="pl-[10px]">{productLenth}</span>
                            <span className="pl-[10px]">
                              ${item?.price * productLenth}
                            </span>
                          </p>
                        </div>
                        <button onClick={() => deleteItem(i)}>
                          <BsTrash />
                        </button>
                      </div>
                    ))}
                </div>
                <button className="bg-[#ff7d1b] text-[#fff] capitalize rounded-xl w-full px-[0.625rem] py-[0.75rem]">
                  checkout
                </button>
              </div>
            </div>
            <div
              className="w-[2.5rem] h-[2.5rem] cursor-pointer "
              onClick={toggleBasket}
            >
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className="mobileMenu z-[820] relative">
        <ul>
          <ul
            ref={openUl}
            className="flex gap-[0.625rem] items-start fixed flex-col h-full top-0  left-[-100%] pt-[40px] w-[200px] bg-white   pl-[40px] transition-all duration-700"
          >
            <a className="mb-[20px] cursor-pointer" onClick={closeMenu}>
              <AiOutlineClose />
            </a>
            {menu &&
              menu?.map((item, i) => (
                <li className="capitalize font-[300] md:font-bold" key={i}>
                  {item.name}
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Header;
