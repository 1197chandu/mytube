import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="w-2/12 p-2 mt-5">
      <div className="border-b-2 pl-3">
        <Link to="/">
          <div className="p-1 bg-gray-200 rounded-md hover:text-gray-600">
            Home
          </div>
        </Link>
        <div className="p-1 cursor-pointer  hover:text-gray-600">Shorts</div>
        <div className="p-1 cursor-pointer  hover:text-gray-600">
          Subscription
        </div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className="p-1 font-semibold">You </div>
        <div className="p-1">History</div>
        <div className="p-1">Playlists</div>
        <div className="p-1">Watch later</div>
        <div className="p-1">Liked videos</div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className="p-1 font-semibold">Explore</div>
        <div className="p-1">Trending</div>
        <div className="p-1">Shopping</div>
        <div className="p-1">Music</div>
        <div className="p-1">Flims</div>
        <div className="p-1">Live</div>
        <div className="p-1">Gaming</div>
        <div className="p-1">News</div>
        <div className="p-1">Sport</div>
        <div className="p-1">Course</div>
        <div className="p-1">Fashion and Beauty</div>
        <div className="p-1">Podcast</div>
      </div>
      <div className="border-b-2 pl-3 pt-2">
        <div className="p-1 font-semibold">More from YouTube</div>
        <div className="p-1">YouTube Premium</div>
        <div className="p-1">YouTube Music</div>
        <div className="p-1">YouTube Kids</div>
      </div>
    </div>
  );
};

export default SideBar;
