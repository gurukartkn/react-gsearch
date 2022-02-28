import React from "react";
import { Circles } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Circles type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );
};
