import React from "react";

const VideoCard = ({ data }) => {
  return (
    <div className="p-2 m-2 w-92">
      <img
        className="rounded-lg"
        src={data?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="w-72 p-2">
        <p className="font-bold">{data?.snippet?.title.slice(0, 70)}</p>
        <p className="font-semibold text-[13px] text-gray-500">
          {data?.snippet?.channelTitle}
        </p>
        <p className="font-semibold text-[13px] text-gray-500">
          {(data?.statistics?.viewCount / 1000000).toFixed(2)}M Views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
