import { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../redux/videoSlice";

const useFetchVideos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };
};

export default useFetchVideos;
