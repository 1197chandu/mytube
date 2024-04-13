import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
