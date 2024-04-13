import React from "react";
import Button from "./Button";
import { namesOfButton } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex mt-5 overflow-x-hidden">
      {namesOfButton.map((btn, i) => {
        return <Button name={btn} key={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
