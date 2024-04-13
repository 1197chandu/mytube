import React from "react";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6"
          src={HAMBURGER_ICON}
          alt="Hamburger Menu Img"
          onClick={handleToggleMenu}
        />
        <img className="h-6 mx-4" src={YOUTUBE_LOGO} alt="Youtube Logo" />
      </div>
      <div className="col-span-10">
        <input
          className="p-2 w-[50%] rounded-l-full  sm:w-[600px] md:rounded-l-full  md:p-2 px-6 border border-gray-200"
          type="text"
        />
        <button className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200 hover:bg-gray-200">
          Serach
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="User icon" />
      </div>
    </div>
  );
};

export default Header;
