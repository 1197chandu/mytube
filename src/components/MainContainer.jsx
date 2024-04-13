import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import useFetchVideos from "../customhooks/useFetchVideos";

const MainContainer = () => {
  useFetchVideos();
  return (
    <div className="w-10/12">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
