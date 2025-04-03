import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const { count } = useSelector((state) => state.counter);
  return <div>{count}</div>;
};

export default Display;
