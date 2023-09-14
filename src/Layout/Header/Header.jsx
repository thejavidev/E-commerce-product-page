import React, { useRef } from "react";
import { avatar, logo } from "../../assets";
import { SlBasket } from "react-icons/sl";

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
      <header className=" px-[150px] py-[20px]  w-full fixed top-0 left-0 right-0 ">
        <div className="flex items-center w-full  justify-between  border-b-2 pb-[30px]">
          <div className="flex items-center">
            <div className="mr-[20px]">
              <img src={logo} alt="" />
            </div>
            <ul className="flex gap-[10px] items-center">
              {menu &&
                menu?.map((item, i) => (
                  <li className="capitalize font-[300] " key={i}>
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="card flex items-center relative">
              <button className="relative" onClick={toggleBasket}>
                <SlBasket className="text-[22px]" />
                <span className="w-[15px] h-[15px] text-[13px] p-[10px] rounded-full bg-red-800 flex items-center justify-center text-white  absolute top-[-10px] right-[-10px]">
                  1
                </span>
              </button>
              <div
                ref={basketCard}
                className="basket-card absolute top-[30px] right-0 bg-[#ffff] invisible opacity-0 shadow-mm w-[200px] h-[200px] p-[20px]"
              >
                <h2 className="border-b-[1px] border-[#00] w-full capitalize pb-[4px] ">cart</h2>
                <div className="cards">
                    <div className="flex justify-between w-full">
                        <img src={shoes1} alt="" />
                    </div>
                </div>
              </div>
            </div>
            <div className="w-[40px] h-[40px]">
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
