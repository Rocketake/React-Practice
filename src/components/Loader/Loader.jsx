import React from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <SyncLoader color="#00ff09" margin={1} size={16} speedMultiplier={1} />
  );
};

export default Loader;
