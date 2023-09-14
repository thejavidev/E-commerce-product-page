import React, { useRef } from "react";
import { avatar, logo, shoes1 } from "../../assets";
import { SlBasket } from "react-icons/sl";
import { BsTrash } from "react-icons/bs";
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

  const toggleBasket = () => {
    basketCard.current.classList.toggle("open");
  };

  return (
    <>
      <header className=" px-[9.375rem] py-[1.25rem]  w-full fixed top-0 left-0 right-0 ">
        <div className="flex items-center w-full  justify-between  border-b-2 pb-[1.875rem]">
          <div className="flex items-center">
            <div className="mr-[1.25rem]">
              <img src={logo} alt="" />
            </div>
            <ul className="flex gap-[0.625rem] items-center">
              {menu &&
                menu?.map((item, i) => (
                  <li className="capitalize font-[300] " key={i}>
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
                  1
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
                  <div className="flex justify-between w-full items-center gap-[0.625rem] mb-[0.625rem] border-b-[0.063rem] border-[#ccc] pb-[0.313rem]">
                    <img
                      className="w-[2.5rem] rounded-sm"
                      src={shoes1}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="line-clamp-1 text-[0.75rem]">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <p className="text-[0.75]">
                        <span>$ 125</span> x <span>3</span> <span>$ 375</span>
                      </p>
                    </div>
                    <button>
                      <BsTrash />
                    </button>
                  </div>
                </div>
                <button className="bg-[#ff7d1b] text-[#fff] capitalize rounded-xl w-full px-[0.625rem] py-[0.75rem]">
                  checkout
                </button>
              </div>
            </div>
            <div
              className="w-[2.5rem] h-[2.5rem] cursor-pointer"
              onClick={toggleBasket}
            >
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
