import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useSelector((store) => store.videos.videos);

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link
          key={video.id}
          to={"/watch?v=" + (video.id.videoId ? video.id.videoId : video.id)}
        >
          <VideoCard key={video.id} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
