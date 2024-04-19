import React, { useEffect, useRef, useState } from "react";
import {
  HAMBURGER_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { cacheResult } from "../redux/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isShowSuggestions, setIsShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchText]: json[1],
      })
    );
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
        <div>
          <div className="flex">
            <input
              className="p-2 w-[50%] rounded-l-full  sm:w-[600px] md:rounded-l-full  md:p-2 px-6 border border-gray-200"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={(e) => setIsShowSuggestions(true)}
            />
            <button className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200 hover:bg-gray-200">
              <img className="h-6" src={SEARCH_ICON} alt="search icon" />
            </button>
          </div>
          {isShowSuggestions && suggestions.length > 0 && (
            <div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px] z-[9999] shadow-lg">
              <ul>
                {suggestions.map((suggestion) => (
                  <li className="hover:bg-gray-100 py-1 border-b border-gray-50 cursor-pointer flex">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="User icon" />
      </div>
    </div>
  );
};

export default Header;
